# Data Volume - How Many TBs
**Discovery question for understanding scale**

---

## The Question
```
"What does your data volume look like - how many TBs are you working with?"
```

---

## Sweet Spot Response (Under 10TB)
```
"Perfect - that's actually a great fit for us."

"That's where our single-node architecture really excels."

"BigQuery and Snowflake are built for massively distributed workloads -
but most people are working with data that fits comfortably on a
powerful single machine."

"That's why we're both faster and cheaper."
```

---

## Large Scale Response (10TB+)
```
"Scale is important to get right."

"For petabyte-scale, you might need a different architecture.
That said, many teams use MotherDuck for specific use cases
alongside their main warehouse."
```

---

## Size Guidelines
| Data Size | Fit |
|-----------|-----|
| GBs | Perfect - sweet spot |
| 1-10 TB | Great fit |
| 10-50 TB | Good fit for specific workloads |
| 50+ TB | May need distributed, but can complement |

---

## Next Steps
→ [[09-Reference/Pricing Walk-through]]
→ [[07-Pre-Close/Cost Pre-Close]]
