# Overview: What is MotherDuck?

MotherDuck is a **serverless cloud analytics service** built to extend the capabilities of **DuckDB** to the cloud. It is designed for the "easy data" era, where performance, simplicity, and efficiency are paramount.

## Key Value Proposition

1.  **Serverless & Managed**: No need to provision instances, manage clusters, or resize warehouses. You just write SQL.
2.  **Supercharged Local DuckDB**: It connects seamlessly with your local DuckDB instance, giving it cloud persistence, sharing capabilities, and scalability.
3.  **Performance**: optimized for interactive analytics with low latency.
4.  **Cost-Effective**: Pay only for what you use, leveraging your local compute when possible.

## How it differs from traditional Data Warehouses

Traditional Data Warehouses (Snowflake, BigQuery, Redshift) are powerful but often complex and expensive for many use cases. They follow a strict client-server model where *everything* happens in the cloud.

MotherDuck introduces a paradigm shift:
- **It meets you where you are**: Works with your local laptop's compute.
- **Hybrid by design**: It doesn't force you to move all data to the cloud if it's better processed locally.
- **Developer API first**: It feels like a library, not just a service.

## Core Pillars

- **Easy**: Instant setup, standard SQL (DuckDB dialect).
- **Fast**: In-process execution + cloud scale.
- **Collaborative**: Share databases with a link or a command.
