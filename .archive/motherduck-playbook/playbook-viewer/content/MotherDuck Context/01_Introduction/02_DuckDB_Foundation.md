# DuckDB Foundation

To understand MotherDuck, you must first understand **DuckDB**. MotherDuck is essentially a managed, distributed, and collaborative version of DuckDB.

## What is DuckDB?

DuckDB is an in-process SQL OLAP (Online Analytical Processing) database management system.
- **"SQLite for Analytics"**: Just as SQLite is the standard for embedded transactional (OLTP) databases, DuckDB is the standard for embedded analytical databases.
- **In-Process**: It runs *inside* your application or script. There is no separate server process to install, configure, or manage.
- **Columnar execution**: deeply optimized for analytical queries (aggregations, joins, scans) rather than transactional updates.
- **Vectorized Engine**: It processes data in batches (vectors) rather than row-by-row, leading to massive speedups.

## Why MotherDuck chose DuckDB

1.  **Speed**: It is incredibly fast on single nodes.
2.  **Simplicity**: zero-dependency, single binary.
3.  **SQL Support**: Excellent SQL dialect support, compatible with PostgreSQL conventions.
4.  **Ecosystem**: Rapidly growing adoption in the data science and engineering community.

## The MotherDuck Connection

MotherDuck runs the **exact same DuckDB engine** in the cloud that you run on your laptop. This ensures:
- **100% Compatibility**: If it runs locally, it runs in MotherDuck.
- **Seamless Data Movement**: Moving data between local and cloud is efficient because the internal storage formats are identical.
