# Cloud Persistence & "Duck Lake"

## Cloud Persistence

DuckDB is just a file (`my_db.duckdb`).
MotherDuck provides **Managed Storage** for that file.

### How it works
1.  When you run `CREATE TABLE` in MotherDuck, we write the data to optimized storage (backed by S3) in our cloud.
2.  However, to the user, it still looks like a database.
3.  **Safety**: We handle backups, durability, and availability. You don't have to manage the file integrity.

## "Duck Lake" (The Data Lakehouse)

The term **Duck Lake** refers to using MotherDuck/DuckDB to query data *directly where it lives* in Object Storage (S3, GCS, R2), without loading it into the database first.

### The "Lake" Pattern
1.  **Raw Data**: You dump raw logs/JSON/Parquet into an S3 bucket.
2.  **Query**:
    ```sql
    SELECT *
    FROM 's3://my-bucket/logs/*.parquet'
    WHERE date > '2024-01-01'
    ```
3.  **No Ingestion**: You didn't do `COPY INTO`. You just queried it.

### Why MotherDuck is the best "Lake Engine"
- **Metadata Caching**: We remember what files are in your bucket so `ls` is fast.
- **Smart Scans**: We only download the *columns* you ask for (Parquet projection) and the *byte-ranges* you need (Parquet predicate pushdown).
- **Block-Based Caching** (New in 2025): If you query the same S3 file twice, we cache the blocks in the "Duckling" NVMe SSD tier for super speed.
