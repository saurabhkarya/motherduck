# Interactive vs Batch Queries
**Discovery question for understanding query patterns**

---

## The Question
```
"What percentage of your queries are interactive vs. batch and scheduled?"
```

---

## If Mostly Interactive
```
"That makes sense and that's where we shine."

"Our architecture is optimized for interactive, exploratory workloads."
```

**Follow-up:**
```
"You mentioned dashboards - what BI tool are you using on top of
[data warehouse]? Looker? Tableau? Something else?"
```

---

## Why This Matters
MotherDuck excels at interactive queries because:
- Single-node architecture = no coordination overhead
- Instant spin-up/cool-down
- No idle costs between queries

This is different from batch-heavy workloads where distributed systems might make sense.

---

## Next Steps
→ [[07-Pre-Close/Cost Pre-Close]]
→ [[08-Close/Standard Close]]
