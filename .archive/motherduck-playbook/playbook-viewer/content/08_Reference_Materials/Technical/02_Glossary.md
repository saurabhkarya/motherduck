# MotherDuck Glossary

Key terms and concepts you'll encounter in sales conversations. Use this to speak confidently about technical topics.

---

## MotherDuck-Specific Terms

### Duckling
A compute instance in MotherDuck. Each user gets their own isolated Duckling sized for their workload.

| Type | Description | Use Case |
|------|-------------|----------|
| **Pulse** | Burstable, pay-per-query | Ad-hoc queries, bursty workloads |
| **Standard** | Balanced, per-instance | Everyday analytics |
| **Jumbo** | High-power, per-instance | Heavy ETL, batch jobs |
| **Mega/Giga** | Enterprise scale | Large transformations |

### Dual Execution
MotherDuck's hybrid processing model where queries run locally, in the cloud, or split between both. Enables fast local iteration with cloud scale.

### Shares
Zero-copy snapshots of data that can be shared with colleagues. Recipients can query shared data without duplicating it.

### DuckLake
MotherDuck's open-source lakehouse format. Stores metadata in a database (not chained files like traditional lakehouses), enabling ACID transactions with simplified deployment.

### Secrets Vault
Secure storage for external data source credentials (S3, GCS, Azure). Eliminates hardcoded credentials in queries.

### SaaS Mode
A security feature that limits MotherDuck's interaction with the local environment. Used by third-party tools and BI vendors.

### Failsafe
7-day retention period for deleted data, providing protection against accidental deletion.

---

## DuckDB Terms

### DuckDB
An open-source, in-process analytical database. The engine that powers MotherDuck. Known for speed, simplicity, and SQL compatibility.

### OLAP (Online Analytical Processing)
Database workloads focused on analysis—complex queries over large datasets. DuckDB/MotherDuck are OLAP systems, optimized for analytics.

### OLTP (Online Transaction Processing)
Database workloads focused on transactions—many small reads/writes. PostgreSQL, MySQL are OLTP. Different from MotherDuck's focus.

### Columnar Storage
Data stored by column rather than row. Much faster for analytics queries that scan specific columns. DuckDB is columnar.

### Vectorized Execution
Processing data in batches (vectors) rather than row-by-row. Significantly faster for OLAP queries. Core to DuckDB's speed.

### In-Process Database
A database that runs within your application's process, not as a separate server. DuckDB is in-process, like SQLite.

---

## Data Warehouse Concepts

### Serverless
No infrastructure to provision, manage, or scale. MotherDuck handles everything—you just write queries.

### Data Warehouse
A centralized repository for structured data, optimized for analytics and reporting. MotherDuck is a serverless cloud data warehouse.

### Data Lake
Storage for raw data in various formats (Parquet, JSON, etc.), typically in cloud object storage (S3, GCS). MotherDuck can query data lakes directly.

### Lakehouse
Architecture combining data lake flexibility with data warehouse features (ACID transactions, schema enforcement). DuckLake is MotherDuck's lakehouse solution.

### ETL / ELT
- **ETL**: Extract, Transform, Load—transform data before loading
- **ELT**: Extract, Load, Transform—load raw data, transform in warehouse

MotherDuck supports ELT workflows natively.

### Data Pipeline
Automated flow of data from source systems through transformations to destination. MotherDuck can be part of or replace data pipelines.

---

## File Formats

### Parquet
Columnar file format optimized for analytics. Compressed, efficient, widely used. MotherDuck's recommended format.

### CSV (Comma-Separated Values)
Simple text format. Easy to use but less efficient than Parquet. Supported by MotherDuck.

### JSON (JavaScript Object Notation)
Flexible format for nested/semi-structured data. Supported by MotherDuck.

### Delta Lake
Open table format adding ACID transactions to Parquet files. Created by Databricks. MotherDuck supports Delta.

### Iceberg
Open table format for huge analytics tables. Created at Netflix. MotherDuck supports Iceberg.

---

## Cloud & Infrastructure

### S3 (Amazon Simple Storage Service)
Amazon's object storage. Common data lake storage. MotherDuck queries S3 directly.

### GCS (Google Cloud Storage)
Google's object storage equivalent. MotherDuck supports GCS.

### Azure Blob Storage
Microsoft's object storage. MotherDuck supports Azure Blob.

### Region
Geographic location for data storage and compute. MotherDuck offers US and EU (Frankfurt) regions.

### Compute Units (CU)
MotherDuck's measure for pay-per-query billing on Pulse. Based on CPU seconds and memory usage.

---

## Security & Compliance Terms

### SOC 2 Type II
Security certification for service providers. Type II validates controls work over time (not just at a point). MotherDuck has SOC 2 Type II.

**See**: [SOC 2 Type II Explained](./Compliance/01_SOC2_Type_II_Explained.md)

### GDPR
EU data protection regulation. Governs handling of EU resident data. MotherDuck is GDPR verified.

**See**: [GDPR Explained](./Compliance/02_GDPR_Explained.md)

### HIPAA
US healthcare data protection law. Requires BAA with vendors handling PHI. MotherDuck offers HIPAA BAAs.

**See**: [HIPAA Explained](./Compliance/03_HIPAA_Explained.md)

### BAA (Business Associate Agreement)
Contract required by HIPAA between healthcare entities and their vendors. MotherDuck provides BAAs for Business Plan.

### DPA (Data Processing Agreement)
Contract required by GDPR between data controllers and processors. MotherDuck provides DPAs.

### PHI (Protected Health Information)
Health data that can identify individuals. Governed by HIPAA.

### PII (Personally Identifiable Information)
Any data that can identify a person. Governed by various privacy laws.

---

## Integration Terms

### JDBC (Java Database Connectivity)
Standard API for connecting Java applications to databases. MotherDuck supports JDBC.

### ODBC (Open Database Connectivity)
Standard API for connecting applications to databases. MotherDuck supports ODBC. Used by Power BI, Tableau.

### dbt (data build tool)
Popular SQL-based transformation tool. MotherDuck has dbt adapter.

### BI (Business Intelligence)
Tools for data visualization and reporting. Tableau, Power BI, Looker, etc. MotherDuck integrates with major BI tools.

### WASM (WebAssembly)
Technology enabling code to run in web browsers. DuckDB-WASM powers browser-based queries in MotherDuck UI.

---

## Competitor Terms

### Snowflake
Enterprise cloud data warehouse. MotherDuck competitor. Known for scale, higher cost.

### Databricks
Lakehouse/ML platform built on Spark. MotherDuck competitor for analytics. Known for ML capabilities.

### BigQuery
Google's serverless data warehouse. MotherDuck competitor. Founded by same team as MotherDuck.

### Redshift
Amazon's data warehouse. MotherDuck competitor. Older architecture.

### Spark
Distributed data processing framework. Powers Databricks. Overkill for many MotherDuck use cases.

---

## Quick Reference Card

| Term | One-Line Definition |
|------|---------------------|
| **MotherDuck** | Serverless cloud warehouse on DuckDB |
| **DuckDB** | Fast in-process analytics database |
| **Duckling** | Your isolated compute instance |
| **Dual Execution** | Local + cloud query processing |
| **Parquet** | Columnar file format for analytics |
| **OLAP** | Analytics workloads (our focus) |
| **Serverless** | No infrastructure to manage |
| **SOC 2 Type II** | Security certification we have |
| **GDPR** | EU data privacy law we comply with |
| **HIPAA** | US healthcare law, BAA available |
