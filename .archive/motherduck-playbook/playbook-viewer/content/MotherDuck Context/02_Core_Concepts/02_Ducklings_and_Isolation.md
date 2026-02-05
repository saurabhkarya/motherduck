# Ducklings & Isolation

MotherDuck uses a unique tenant isolation model to ensure performance and security.

## What is a Duckling?

A **Duckling** is an isolated, serverless compute instance dedicated to a single user (or session).
- Think of it as your own personal "container" running DuckDB in the cloud.
- It spins up instantly when you query and spins down when idle.

## Architecture

1.  **Storage Layer**: Persistent data is stored in object storage (S3), decoupled from compute.
2.  **Compute Layer (Ducklings)**:
    - When you connect (`ATTACH 'md:'`), you are assigned a Duckling.
    - This Duckling handles your query processing.
    - Because it is *yours*, your heavy query doesn't slow down your neighbor's query (No "noisy neighbor" problem).

## Read Scaling

For scenarios with high concurrency (e.g., a BI dashboard used by 100 people), a single Duckling might get overwhelmed.
- MotherDuck implements **Read Scaling**.
- It can spin up multiple read-replicas (multiple Ducklings) to serve the same data.
- This allows MotherDuck to handle higher concurrency than a standard single-node DuckDB could.

## "Serverless" Reality

- **Zero Config**: You don't choose "Small, Medium, Large" warehouses.
- **Auto-Sleep**: You aren't billed for idle time.
- **Instant Wake**: The startup time is negligible for human interaction.

## Sizes: Small to Giga (Updated 2025)
Originally, MotherDuck was "one size fits all". As of 2025, we introduced tiering for heavy workloads:
- **Standard Ducklings**: The default. Great for interactive queries.
- **Mega & Giga Ducklings**: Massive compute instances available on Business Plans for heavy ETL or huge joins.
