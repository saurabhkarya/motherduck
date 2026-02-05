# Embedded OLAP vs. Embedded OLTP

Understanding the difference between **DuckDB** (OLAP) and **SQLite** (OLTP) is crucial to understanding why MotherDuck exists.

## The Definitions

- **OLTP (Online Transaction Processing)**:
    - **Goal**: Process many small updates/inserts fast. "Add item to cart", "Process payment".
    - **Row-Oriented**: Data is stored row-by-row on disk.
    - **Champion**: **SQLite** (or Postgres/MySQL).
    - **Use Case**: The backend database for a mobile app or website.

- **OLAP (Online Analytical Processing)**:
    - **Goal**: Aggregate massive amounts of data fast. "What is the average sales per region per month for the last 5 years?"
    - **Column-Oriented**: Data is stored column-by-column.
    - **Champion**: **DuckDB** (or Snowflake/ClickHouse).
    - **Use Case**: Data science, dashboards, reporting.

## Why "Embedded"?

Both SQLite and DuckDB are **embedded**.
- **No Server**: There is no "process" running in the background listening on a port (like TCP 5432 for Postgres).
- **In-Process**: The database engine runs *as a library* inside your Python script, or inside the MotherDuck WASM client.
- **Speed**: No network overhead. Function calls are direct C++ pointer jumps.

## The Comparison

| Feature | SQLite (OLTP) | DuckDB (OLAP) |
| :--- | :--- | :--- |
| **Storage Layout** | Row Store | Column Store |
| **Optimized For** | `SELECT * FROM users WHERE id=1` | `SELECT AVG(score) FROM users` |
| **Writes** | Fast single-row inserts | Fast bulk appends (CSV/Parquet) |
| **Compression** | Minimal | Aggressive (RLE, Bit-packing) |
| **Engine** | Standard Row Execution | **Vectorized Execution** |

## Vectorized Execution?

This is the secret sauce of DuckDB (and MotherDuck).
- **Scalar (SQLite/Postgres)**: The engine processes one row at a time.
    - *Loop*: Read row 1 -> Add to sum. Read row 2 -> Add to sum.
    - *CPU efficiency*: Poor. Lots of overhead per row.
- **Vectorized (DuckDB)**: The engine processes a **vector** (batch) of values (e.g., 2048 values) at a time.
    - *Loop*: Read 2048 rows -> CPU SIMD instruction "Add all these".
    - *CPU efficiency*: Extreme. Uses modern CPU caches and SIMD instructions.

> **Analogy**:
> - **OLLTP (SQLite)** is like a taxi. Great for taking 1 user to 1 destination.
> - **OLAP (DuckDB)** is like a train. Terrible for dropping off 1 person at their door, but amazing for moving 1000 people from City A to City B.
