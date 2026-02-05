# MotherDuck Product Overview

## What is MotherDuck?

MotherDuck is a **serverless cloud analytics platform** built on [DuckDB](https://duckdb.org/), the fastest-growing analytical database. It combines the power of cloud computing with the efficiency of local processing.

### The Simple Explanation
> "MotherDuck is like having a powerful data warehouse that runs both on your laptop and in the cloud simultaneously. You write SQL, we handle everything else."

---

## Core Product Components

### 1. Serverless Cloud Database
- Managed DuckDB databases in the cloud
- No infrastructure to provision or manage
- Automatic scaling based on workload
- SOC 2 Type II and GDPR compliant

### 2. Dual Execution Engine
- Queries run on **both** your local machine and cloud
- Automatic optimization of where computation happens
- Leverage your idle laptop compute to reduce costs
- Near-zero latency for iterative development

### 3. Ducklings (Compute Instances)
Individual compute instances sized for different needs:

| Duckling Size | Best For | Use Case |
|---------------|----------|----------|
| **Pulse** | Bursty, ad-hoc queries | Interactive exploration |
| **Standard** | Everyday analytics tasks | Regular reporting |
| **Jumbo** | Heavy ETL workloads | Batch processing |
| **Mega/Giga** | Enterprise scale | Large transformations |

### 4. Web UI & SQL IDE
- Browser-based notebook interface
- Column Explorer for data discovery
- AI-powered SQL assistance (FixIt)
- PROMPT QUERY for natural language → SQL

### 5. AI & MCP Integration
MotherDuck's AI capabilities democratize data access:

| Feature | What It Does |
|---------|--------------|
| **PROMPT QUERY** | Natural language → SQL for non-technical users |
| **AI FixIt** | Auto-corrects SQL errors with context-aware suggestions |
| **AI Edit** | Inline natural language SQL editing in the UI |
| **prompt_explain** | AI explains what complex queries do |
| **prompt_schema** | AI helps understand database structure |

**MCP Server** (Model Context Protocol):
- Connect AI assistants (Claude, Cursor, Windsurf, Zed) directly to your database
- Remote server: `api.motherduck.com/mcp` (launched Dec 2025)
- Self-hosted option via `mcp-server-motherduck` (62k+ downloads)
- AI agents can explore schemas, run queries, ask questions in natural language

**DuckDB-NSQL**:
- 7B parameter text-to-SQL model built by MotherDuck + Numbers Station
- Fine-tuned on 200,000+ DuckDB-specific text-to-SQL pairs
- Available on Ollama for local deployment

### 6. Data Sharing (Shares)
- Zero-copy data sharing between users
- Instant snapshots colleagues can query
- No data duplication or movement

---

## Key Technical Features

### File Format Support
- Parquet, CSV, JSON natively supported
- Delta Lake, Iceberg integration
- Direct S3/GCS/Azure blob access

### BI Tool Integrations
- Tableau (Cloud & Server connectors)
- Power BI (ODBC driver + DirectQuery)
- Looker, Metabase, Superset
- 25+ ecosystem integrations

### Developer Experience
- Python SDK with pandas integration
- Node.js and JDBC/ODBC drivers
- DuckDB CLI (`ATTACH 'md:'`)
- WASM for browser-based queries

### DuckLake
Open-source lakehouse format providing:
- ACID transactions on data lakes
- Metadata stored in database (not chained files)
- Simplified deployment vs. traditional lakehouses

---

## What Makes MotherDuck Different

| Traditional Warehouse | MotherDuck |
|-----------------------|------------|
| Provision clusters before use | Serverless, instant start |
| Pay for idle compute | Pay only for queries run |
| Remote-only execution | Hybrid local + cloud |
| Complex infrastructure | Zero ops required |
| Separate dev/prod environments | Same SQL everywhere |

---

## Customer Success Metrics

Real results from MotherDuck customers:

| Customer | Result |
|----------|--------|
| **Definite** | 70% cost reduction vs. traditional warehouse |
| **Gardyn** | 10x more affordable for IoT analytics |
| **FinQore** | 60x performance improvement (8 hours → 8 minutes) |

---

## The Technology Stack

```
┌─────────────────────────────────────────┐
│           Your Application              │
├─────────────────────────────────────────┤
│     MotherDuck Cloud Service            │
│  ┌─────────────┐  ┌─────────────────┐   │
│  │  Ducklings  │  │  Cloud Storage  │   │
│  │  (Compute)  │  │   (Databases)   │   │
│  └─────────────┘  └─────────────────┘   │
├─────────────────────────────────────────┤
│            DuckDB Engine                │
│     (OLAP, Columnar, Vectorized)        │
└─────────────────────────────────────────┘
```
