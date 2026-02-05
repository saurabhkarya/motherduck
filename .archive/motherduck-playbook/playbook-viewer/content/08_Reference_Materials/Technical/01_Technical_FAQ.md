# Technical FAQ for Sales

Common technical questions you'll encounter, with answers that demonstrate expertise without over-promising.

---

## Architecture & Infrastructure

### "How does MotherDuck work?"

> "MotherDuck is a serverless cloud data warehouse built on DuckDB. When you write a query, our hybrid execution engine decides the optimal way to run it—locally on your machine, in the cloud, or split between both. You get cloud scale with local speed."

**Technical Details** (if they ask):
- 1.5-tier architecture (client-server hybrid)
- DuckDB engine runs both locally and in cloud
- Automatic query optimization
- Separated storage and compute

### "What is DuckDB?"

> "DuckDB is an in-process analytical database—think SQLite for analytics. It's columnar, vectorized, and incredibly fast for OLAP workloads. It's open source and has become one of the fastest-growing databases. MotherDuck brings DuckDB to the cloud with collaboration, persistence, and scaling."

**Key Points**:
- OLAP (analytics), not OLTP (transactions)
- Embedded, runs in-process
- Open source, MIT licensed
- Created by CWI Amsterdam researchers

### "What's a Duckling?"

> "A Duckling is your dedicated compute instance. Think of it as your personal warehouse—sized for your needs, isolated from other users. Different sizes (Pulse, Standard, Jumbo) for different workloads."

| Size | Best For |
|------|----------|
| Pulse | Ad-hoc queries, bursty workloads |
| Standard | Regular analytics, balanced |
| Jumbo | Heavy ETL, batch processing |

### "What's Dual Execution?"

> "Dual Execution is our hybrid processing model. Queries can run on your laptop, in the cloud, or both simultaneously. For iterative development, local execution gives instant feedback. For production scale, cloud compute handles the heavy lifting."

**Benefits**:
- Local = instant iteration
- Cloud = scale and durability
- Hybrid = best of both

---

## Data & Storage

### "What file formats do you support?"

| Format | Support Level |
|--------|---------------|
| **Parquet** | Native, optimized |
| **CSV** | Native |
| **JSON** | Native |
| **Delta Lake** | Supported |
| **Iceberg** | Supported |

> "We natively support Parquet, CSV, and JSON. We also integrate with Delta Lake and Iceberg for lakehouse architectures. Most customers use Parquet for best performance."

### "Where is data stored?"

> "You choose your region when you create your organization. We have US and EU (Frankfurt) regions. Data in your region stays in that region. We handle replication and durability automatically."

### "Can I query data in S3/GCS/Azure?"

> "Absolutely. You can query external data directly using our secrets vault for credentials. No need to copy data into MotherDuck—query it where it lives. Great for data lake architectures."

### "How much data can MotherDuck handle?"

> "MotherDuck is optimized for gigabytes to low terabytes—what we call 'medium data.' For most startups and mid-size companies, that's the sweet spot. If you're at petabyte scale, let's talk about your specific use case."

**Sizing Guidance**:
- **Sweet spot**: 10 GB - 1 TB
- **Works well**: Up to a few TB
- **May need discussion**: 10+ TB

---

## Performance

### "How fast is MotherDuck?"

> "Customers typically see 4x faster queries than BigQuery in benchmarks. DuckDB's vectorized columnar engine is incredibly efficient. Plus, local execution means zero network latency for interactive work."

### "How does it compare to Snowflake performance?"

> "For analytics queries on medium data, MotherDuck is very competitive—often faster because there's no cluster spin-up time. Snowflake's architecture is optimized for massive scale; ours is optimized for developer experience and cost efficiency."

### "What about cold start times?"

> "With Pulse (our burstable compute), queries start immediately—no waiting for warehouses to spin up. For Standard/Jumbo instances, they're always-on when running, so no cold starts during your session."

---

## Integrations

### "What BI tools do you support?"

| Tool | Integration Type |
|------|-----------------|
| **Tableau** | Cloud/Server connector |
| **Power BI** | ODBC + DirectQuery |
| **Looker** | Native connector |
| **Metabase** | DuckDB driver |
| **Superset** | DuckDB support |

> "We integrate with 25+ tools. Most major BI platforms have connectors or can use our JDBC/ODBC drivers."

### "How do I connect from Python?"

```python
import duckdb

# Connect to MotherDuck
conn = duckdb.connect('md:my_database')

# Run queries
df = conn.execute("SELECT * FROM my_table").fetchdf()
```

> "Our Python integration is seamless. Use the duckdb package, connect with your token, and you're set. Works great with pandas, Jupyter, and data science workflows."

### "Do you support dbt?"

> "Yes! dbt works great with MotherDuck. Use our adapter and run your transformations. The local execution is especially nice for dbt development—iterate quickly, deploy to cloud."

### "What about orchestrators?"

> "We work with Airflow, Dagster, Prefect—any orchestrator that can run Python or SQL. Schedule your MotherDuck queries and pipelines just like any other data tool."

---

## Security & Compliance

### "How is authentication handled?"

> "We support Google OAuth, GitHub OAuth, username/password, and access tokens. For programmatic access, you'll use access tokens—they can be scoped (read/write or read-only) and set to expire."

### "Is there SSO/SAML support?"

> "Currently we support Google and GitHub OAuth. Enterprise SSO features like SAML and SCIM are on our roadmap. For many teams, Google Workspace SSO is sufficient."

**Note**: If prospect requires SAML specifically, flag for discussion.

### "Is data encrypted?"

> "Yes—at rest (AES-256) and in transit (TLS 1.2+). We also have a secrets vault for credentials. Your data is encrypted end-to-end."

### "What compliance certifications do you have?"

> "SOC 2 Type II and GDPR verified. HIPAA BAAs available for Business Plan. We can share compliance reports with Business Plan customers."

**See also**: [Compliance Documents](../08_Reference_Materials/Compliance/)

---

## Pricing & Operations

### "How does pricing work?"

> "We have Free, Lite, and Business plans. The key difference is compute options and features. Pulse is pay-per-query; Standard/Jumbo are per-instance. Most startups spend $50-200/month."

**See also**: [Pricing Plans](../01_Company_Knowledge/03_Pricing_Plans.md)

### "Are there any ops requirements?"

> "Zero. MotherDuck is fully serverless. No clusters to provision, no instances to tune, no maintenance windows. Write SQL, get results."

### "What about backups?"

> "Automatic. Deleted data enters a 7-day Failsafe period for recovery. No backup configuration needed on your end."

---

## Limitations (Be Honest)

### "What CAN'T MotherDuck do?"

Be transparent about limitations:

| Limitation | Alternative |
|------------|-------------|
| Petabyte-scale | Consider Snowflake/BigQuery |
| Real-time streaming | Use Kafka/Flink, batch to MotherDuck |
| Heavy ML training | Use Databricks or dedicated ML platform |
| OLTP workloads | Use PostgreSQL, etc. |
| On-premises | Cloud-only |

### "Is it production-ready?"

> "Yes—we've been GA since [date], with SOC 2 Type II certification and enterprise customers running production workloads. That said, for mission-critical petabyte-scale systems, discuss your specific requirements with us."

---

## Related Documents

- [Product Overview](../01_Company_Knowledge/01_Product_Overview.md)
- [Competitive Battlecards](../06_Competitive_Intel/)
- [Security Features](./Compliance/04_Security_Features.md)
- [Glossary](./02_Glossary.md)
