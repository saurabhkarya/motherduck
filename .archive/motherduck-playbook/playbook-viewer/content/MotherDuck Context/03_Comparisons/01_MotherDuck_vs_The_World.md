# MotherDuck vs. The World

A detailed comparison of MotherDuck against the titans of the industry.

| Feature | MotherDuck | Snowflake | BigQuery | Amazon Redshift |
| :--- | :--- | :--- | :--- | :--- |
| **Architecture** | **1.5-Tier (Hybrid)**<br>Runs on Laptop + Cloud | **2-Tier (Cloud Only)**<br>Decoupled Storage/Compute | **Serverless (Cloud Only)**<br>Fully Managed | **MPP (Cloud Only)**<br>Cluster-based (mostly) |
| **Primary Engine** | **DuckDB**<br>(In-process, Vectorized) | **Proprietary**<br>(Closed source) | **Dremel**<br>(Proprietary) | **ParAccel/Postgres fork**<br>(Proprietary) |
| **Pricing Model** | **"Ducklings" (Per-Second)**<br>+ Storage. Very cheap start. | **Credits**<br>Complex. Pay for warehouse uptime. | **On-Demand (Per TB scan)**<br>or Slots. Good for spikey loads. | **Provisioned Node/Hour**<br>or Serverless (expensive). |
| **Latency** | **Instant (Local)**<br>Sub-second (Cloud) | **Seconds**<br>Requires warehouse spin-up. | **Seconds**<br>Job overhead. | **Fast**<br>If cluster is always on. |
| **Setup Time** | **Seconds**<br>`pip install duckdb`<br>`ATTACH 'md:'` | **Hours/Days**<br>IAM, Roles, Warehouses, VNETs. | **Minutes**<br>GCP Project setup is easier. | **Days/Weeks**<br>VPC, Subnets, Security Groups. |
| **Best For** | **Interactive Analytics**<br>Data Apps, Prototyping, <10TB | **Enterprise Warehouse**<br>Governance, Sharing, >100TB | **Ad-hoc Big Data**<br>Log analysis, Petabyte scale. | **Traditional BI**<br>Standard Dashboards, AWS shops. |

## Deep Dive: The Competitors

### 1. Snowflake (The Enterprise Standard)
- **The Good**: incredible governance, data sharing features, works on all clouds. It is safe; no one gets fired for buying Snowflake.
- **The Bad**: It is designed for the "Enterprise". It feels heavy for an individual developer. You can't run it on your laptop. Even the smallest warhouse costs money to run.
- **MotherDuck Advantage**: **Agility**. You can build quicker in MotherDuck. You don't need a Platform Team to provision a warehouse for you.

### 2. Google BigQuery (The Serverless Giant)
- **The Good**: truly serverless. Just throw SQL at it. Amazing integration with Google Ecosystem (GA4, Firebase).
- **The Bad**: Pricing shock. Paying per-TB scanned means a bad query can cost \$1000. High latency for small queries (the "cold start" overhead).
- **MotherDuck Advantage**: **Predictable Performance & Cost**. MotherDuck is optimized for "snappy" dashboard storage. You won't get a bill shock because we cap your spend/usage more intuitively (Duckling sizes).

### 3. Amazon Redshift (The Incumbent)
- **The Good**: If you are all-in on AWS, it integrates deeply. Fast for static, well-tuned schemas.
- **The Bad**: It feels like old technology (because it is). Based on Postgres 8. Tuning sort keys and dist keys is a dark art ("DBA work"). Concurrency scaling is expensive.
- **MotherDuck Advantage**: **Zero Tuning**. DuckDB doesn't need indexes, vacuuming, or sort keys to be fast. It just works.

## Summary: When to choose MotherDuck?

Choose MotherDuck when:
1.  **Speed to Insight matters**: You want to query a CSV or S3 file *right now*.
2.  **Dataset size is < 100TB**: Most companies actually have "Small Data" (gigabytes to terabytes). MotherDuck flies here.
3.  **Cost efficiency**: You are tired of paying \$2000/mo for an idle Redshift cluster.
4.  **Developer Experience**: You prefer a CLI/Python experience over a web console.
