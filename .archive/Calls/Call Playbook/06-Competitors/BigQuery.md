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

## Key Differentiators
- We benchmark **4x faster** than BigQuery
- **Hybrid execution** - test locally with DuckDB (BigQuery can't do this)
- Simpler for smaller datasets

---

## Landmine Questions
Plant these to surface pain:
- "How predictable are your BigQuery costs month-to-month?"
- "How do you test queries before running on production data?"
- "Have you ever been surprised by a BigQuery bill?"

---

## Key Comparison
| BigQuery | MotherDuck |
|----------|------------|
| Per-query pricing (unpredictable) | Compute uptime (predictable) |
| No local testing | DuckDB for local dev |
| Distributed (overkill for < 10TB) | Single-node (optimized for GBs-TBs) |
| Designed by our founders | Evolution of their vision |

---

## Close
→ [[08-Close/Competitor Close]]
