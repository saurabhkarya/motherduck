# Ideal Customer Profile (ICP)

Understanding who to target is the foundation of effective prospecting. This document defines MotherDuck's ideal customer profile.

---

## Primary ICP: The "Medium Data" Company

### Company Profile

| Attribute | Ideal Range |
|-----------|-------------|
| **Company Size** | 10-500 employees |
| **Data Team Size** | 1-20 people |
| **Data Volume** | Gigabytes to low terabytes |
| **Funding Stage** | Seed to Series C |
| **Annual Revenue** | $1M - $100M |

### Industry Sweet Spots
- **SaaS / Software** - Product analytics, customer data
- **Fintech** - Transaction analytics, risk modeling
- **E-commerce** - Customer behavior, inventory analytics
- **HealthTech** - Patient analytics, operational data
- **IoT / Hardware** - Device telemetry, sensor data
- **MarTech** - Campaign analytics, attribution

### Technology Signals
- Using or evaluating: DuckDB, Pandas, dbt
- Currently on: Snowflake, BigQuery, Redshift
- Data stored in: S3, GCS, Parquet, CSV
- Tools: Jupyter, Python, SQL-heavy workflows

---

## Secondary ICP: Data-Savvy Startups

### Company Profile

| Attribute | Ideal Range |
|-----------|-------------|
| **Company Size** | 2-50 employees |
| **Data Team Size** | 0-3 people (often founder/eng) |
| **Funding Stage** | Pre-seed to Series A |
| **Funding Amount** | < $5M raised |

### Characteristics
- Technical founders
- Data-driven decision making
- Cost-conscious
- Moving fast, need quick solutions
- Often using spreadsheets or basic SQL

**Startup Program eligible** - highlight extended credits.

---

## ICP Signals: What to Look For

### High-Intent Signals (Prioritize)
| Signal | Where to Find |
|--------|---------------|
| Searching for "DuckDB" | Intent data tools |
| Job posting: Data Engineer | LinkedIn, careers page |
| Using Snowflake + complaining about cost | Social media, communities |
| Building analytics/BI product | Product pages, G2 |
| Recent funding round | Crunchbase, news |

### Medium-Intent Signals
| Signal | Where to Find |
|--------|---------------|
| Data team hiring | LinkedIn |
| Using dbt, Fivetran | BuiltWith, job posts |
| Tech blog about data | Company blog |
| Speaking at data conferences | Event lists |
| Active in data communities | dbt Slack, Reddit |

### Engagement Signals
| Signal | Meaning |
|--------|---------|
| Website visitor (multiple pages) | Active evaluation |
| Documentation reader | Technical evaluation |
| Free tier signup | Bottom-of-funnel |
| GitHub star on DuckDB | Community interest |

---

## Firmographic Filters

### Company Size
```
Sweet Spot: 20-200 employees
├── Smaller (< 20): Usually startup program, longer sales cycle
├── Medium (20-200): Primary target, fastest deals
└── Larger (200-500): More stakeholders, bigger deals
```

### Geography
- **Primary**: United States, Canada
- **Secondary**: UK, Germany, France, Netherlands, Australia
- **Note**: EU region available (Frankfurt)

### Technology Stack
**Good Fit**:
- Python-based data stack
- SQL-first analytics
- Cloud-native (AWS, GCP, Azure)
- Modern data tools (dbt, Fivetran, Airbyte)

**Potential Fit**:
- Legacy BI (Tableau, Power BI)
- Enterprise warehouses wanting to modernize
- Spreadsheet-heavy but growing

---

## ICP Scoring Model

Score accounts 1-5 on each dimension:

| Dimension | Weight | Scoring Criteria |
|-----------|--------|------------------|
| Company Size | 25% | 10-200 = 5, 200-500 = 4, <10 = 2 |
| Data Team | 25% | Has dedicated data person = 5 |
| Tech Fit | 20% | Uses Python/SQL/cloud = 5 |
| Intent Signals | 20% | Multiple signals = 5 |
| Budget | 10% | Series A+ or revenue = 5 |

**Priority Tiers**:
- **Tier 1 (Score 4-5)**: Immediate outreach, personalized
- **Tier 2 (Score 3-4)**: Sequence outreach, watch for signals
- **Tier 3 (Score 2-3)**: Nurture, check back quarterly

---

## Red Flags (Deprioritize)

| Red Flag | Why |
|----------|-----|
| Enterprise (> 1000 employees) | Long cycles, complex procurement |
| No technical team | Can't implement without help |
| Petabyte-scale data | May need enterprise warehouse |
| Heavy ML/AI focus | Databricks may be better fit |
| Strict on-prem requirements | MotherDuck is cloud-only |
| Already deeply invested in competitor | High switching cost |
