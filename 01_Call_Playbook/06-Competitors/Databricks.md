# Handling Databricks
**When they use or mention Databricks**

---

## The Qualification Question
```
"Databricks is great for heavy ML workloads."

"Quick question - what's your primary use case? ML/AI or analytics?"
```

---

## The Core Insight

> "Most companies don't want or need Spark. A combination of Iceberg
> and DuckDB will work for 95% of companies."
> — Hacker News commenter

**Key Stats:**
- Cluster startup: 5-10+ minutes cold start (users report 20-35 min during peak)
- Serverless: ~20-30 seconds but costs more
- JVM-based: Python/R code requires serialization (slow)

---

## Why Teams Switch

| Pain Point | Databricks | MotherDuck |
|------------|------------|------------|
| **Time-to-Query** | 5-35 min cluster startup | Instant (seconds) |
| **Complexity** | Spark concepts, DBUs, Unity Catalog | Just SQL |
| **Pricing** | DBU + cloud infra (double billing) | Simple compute pricing |
| **Local Dev** | No local mode | DuckDB on your laptop |
| **Learning Curve** | Steep (Spark, Scala, notebooks) | Know SQL? You're set |

---

## Landmine Questions
Plant these to surface pain:
```
"How much time does your team spend on Spark tuning, cluster sizing,
and cost optimization instead of actual analysis?"

"When you need a quick answer, how long do you wait for a cluster
to spin up?"

"How much of your data actually requires distributed processing?"

"Can your analysts prototype queries on their laptops? Or do they
have to pay for cloud compute just to explore data?"
```

---

## The 95% Question (Key Reframe)
```
"Most companies don't have true big data. If your datasets are under
100GB, you're paying the Spark tax for nothing. DuckDB often outperforms
Spark on data that fits in memory."
```

---

## Objection Handling

### "Databricks is the industry standard for data engineering"
```
"Absolutely - for distributed big data at Fortune 500 scale. But the
industry is evolving. DuckDB is one of the fastest-growing database
projects because teams realized they don't need distributed systems
for most workloads."
```

### "We need Spark for our data volumes"
```
"How much data are we talking about? Spark shines at petabyte scale,
but for datasets under 100GB - which covers most analytics - DuckDB
often outperforms Spark. Let's benchmark your actual queries."
```

### "Our team knows Spark/PySpark"
```
"That's valuable expertise. But SQL is universal - anyone on your team
can write DuckDB queries immediately. For new hires, there's no Spark
learning curve. Use MotherDuck for ad-hoc analytics while keeping Spark
for workloads that truly need it."
```

### "Databricks is adding serverless, it's getting easier"
```
"Serverless helps with startup times, but the fundamental complexity
remains - DBU pricing, cluster optimization, Spark concepts. And
serverless comes at a premium. MotherDuck is serverless by design
with simpler pricing."
```

---

## Dual Execution Advantage (Unique to MotherDuck)
```
"Your data science team wants to prototype locally. Databricks says
'wait for the cloud.' MotherDuck says 'use your laptop.'"
```

- Run DuckDB locally for exploration
- Scale same query to cloud for production
- Databricks has NO local story

---

## Customer Proof Point

**Trunkrs:**
> "It takes a lot of work to optimize [Databricks]. We had to scale for
> that. It wasn't cost efficient."

---

## Red Flags: When to Walk Away
- Serious ML/AI workloads (model training, MLflow, feature stores)
- True petabyte scale requiring distributed processing
- Heavy Spark investment (years of PySpark code)
- Real-time streaming at high throughput
- Deep Unity Catalog governance requirements
- Azure/Microsoft-first shops

---

## Close
→ [[08-Close/Competitor Close]]
→ [[07-Pre-Close/Complexity Pre-Close]]
