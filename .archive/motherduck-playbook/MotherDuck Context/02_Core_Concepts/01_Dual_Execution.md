# Dual Execution (Hybrid Execution)

**Dual Execution** (formerly known as Hybrid Execution) is the "magic" behind MotherDuck. It allows a single SQL query to be executed partly on your local machine and partly in the cloud, transparently to the user.

## The Problem with Pure Cloud or Pure Local

- **Pure Local (DuckDB)**: Fast for small data, free compute. But fails on massive datasets (RAM limits), requires downloading everything first, and has no persistence/sharing.
- **Pure Cloud (Data Warehouse)**: Scales indefinitely. But requires uploading all data first (slow), and has high latency for small interactive queries.

## The MotherDuck Solution: Dual Execution

When you issue a query in a DuckDB instance connected to MotherDuck, the query planner evaluates the most efficient execution path:
1.  **Local Execution**: If the query touches only local files (e.g., `SELECT * FROM 'data.csv'`), it runs entirely on your machine. Zero cloud cost, zero latency.
2.  **Cloud Execution**: If the query touches only remote tables (e.g., `SELECT * FROM my_db.users`), it runs entirely in the cloud. The result set is streamed back.
3.  **Hybrid Execution**: If the query joins local data with cloud data:
    ```sql
    SELECT *
    FROM 'local_file.csv' as local
    JOIN my_cloud_db.web_logs as remote
    ON local.id = remote.user_id
    ```
    MotherDuck is smart enough to:
    - Scan the local file.
    - (Optionally) Apply filters locally.
    - Upload *only* the relevant parts of the local data to the cloud (temp table).
    - Execute the heavy JOIN in the cloud.
    - Return the results.

## Technical Mechanics

1.  **Query Decomposition**: The optimizer builds a DAG (Directed Acyclic Graph) of operations.
2.  **Cost Estimation**: Each node is scored for local vs. remote execution.
3.  **Bridge Insertion**: Special operators are inserted to handle data movement (upload/download) with adaptive compression.
4.  **Result Materialization**: Results are streamed to the client effectively.

## Benefits

- **"It works on my machine"**: Because the engine is the same, logic is consistent.
- **Data Gravity**: You don't have to move PB of data to your laptop, nor do you have to upload GB of local CSVs just to do a quick join.
- **Performance**: Leveraging local CPU for parsing and local scans reduces the load on the cloud and speeds up the "interactive" feel.
