# Dual Execution Internals

How does MotherDuck actually decide to run query parts locally vs in the cloud? (The Mechanics).

## The DAG (Directed Acyclic Graph)

Every SQL query is compiled into a **Query Plan**, which is a tree (DAG) of operators.
Example: `Scan -> Filter -> Join -> Aggregate`.

### The Optimization Phases
1.  **Logical Planning**: "I need to join table A and B".
2.  **Physical Planning**: "I will use a Hash Join".
3.  **Hybrid Planning (MotherDuck Special)**: "Table A is local. Table B is cloud. Where do I put the cut?"

## Bridge Insertion

The **Bridge** is a special operator MotherDuck inserts into the DAG. It separates the "Local Execution" zone from the "Cloud Execution" zone.

**Scenario**: Joining Local CSV (small) with Cloud Table (Huge).
1.  **Local**: `Scan(CSV)`
2.  **Local**: `Filter(CSV)` (Reduce size)
3.  **Bridge (Upload)**: Stream the filtered results to the cloud.
4.  **Cloud**: `Receive(Data)`
5.  **Cloud**: `Scan(CloudTable)`
6.  **Cloud**: `Join(ReceivedData, CloudTable)`
7.  **Bridge (Download)**: Stream final result back to client.

## Result Materialization

"Materialization" just means "creating the actual result rows".
- In Snowflake, results are written to S3, and then you download them (Slow for interactive).
- In MotherDuck, results are streamed via the Bridge directly into your local DuckDB engine's memory.
- This allows the **Web UI** to feel snappy because it renders the first few rows immediately as they arrive off the wire.
