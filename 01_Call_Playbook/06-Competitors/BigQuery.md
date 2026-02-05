# Handling BigQuery
**When they use or mention BigQuery**

---

## The Credibility Play
```
"Fun fact - MotherDuck was founded by the original designers of BigQuery."

"They built MotherDuck because they saw an opportunity to make something
even simpler and faster, especially for smaller datasets where BigQuery's
architecture is overkill."
```

---

## Our Advantages

| Pain Point | BigQuery | MotherDuck |
|------------|----------|------------|
| **Execution** | Cloud-only | Hybrid (local + cloud) |
| **Pricing** | Per data scanned (unpredictable) | Per compute time (predictable) |
| **Local Dev** | Requires API calls, network round-trips | DuckDB runs in-process |
| **Lock-in** | GCP-only | Cloud-agnostic |
| **Speed** | Distributed overhead | 4x faster benchmarks |

---

## Landmine Questions
Plant these to surface pain:
```
"How predictable are your BigQuery costs month-to-month?"
"How do you test queries before running on production data?"
"Have you ever been surprised by a BigQuery bill?"
"What happens when you need to iterate quickly on a query?"
```

---

## Key Differentiator: Hybrid Execution
```
"BigQuery is cloud-only. MotherDuck runs queries locally when possible,
saving cost and improving speed. You can use local compute for iterative
work - which BigQuery can't do."
```

---

## Objection Handling

### "BigQuery is already included with GCP"
```
"GCP integration is convenient. How's the BigQuery experience been?
Any concerns around cost or query speed?"

[If any hesitation]

"MotherDuck benchmarks 4x faster than BigQuery. And the cost savings
often exceed any 'bundled' benefit."
```

### "We're a GCP shop"
```
"MotherDuck works with GCS and your existing GCP infrastructure.
You keep your data where it is - we just query it faster and cheaper."
```

---

## AI Positioning vs BigQuery

```
"BigQuery has BQML for ML, but for text-to-SQL and natural
language queries, our PROMPT QUERY is simpler and faster."
```

**Key Differentiator:**
- BigQuery BQML = focused on machine learning
- MotherDuck = built-in text-to-SQL for business users
- MCP Server = AI assistants query your data directly

---

## When BigQuery Wins
- Google Cloud native shops with deep GCP integration (Dataflow, Pub/Sub, GCS, Looker)
- Machine learning workloads requiring BigQuery ML
- Petabyte-scale data warehouses with complex federated queries
- Organizations with negotiated Google enterprise pricing

---

## Customer Proof Points

**Gardyn:**
- Evaluated BigQuery
- Chose MotherDuck: 10x cheaper
- Reduced pipeline from 24+ hours to under 1 hour

---

## Close
→ [[08-Close/Competitor Close]]
→ [[07-Pre-Close/Cost Pre-Close]]
