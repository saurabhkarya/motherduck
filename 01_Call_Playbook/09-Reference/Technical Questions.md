# Technical Questions
**Common technical Q&A - keep answers short, then pivot to meeting**

---

## DuckDB vs MotherDuck

**Q: "How does MotherDuck differ from DuckDB?"**
```
"DuckDB proves you don't need a distributed system for analytical queries -
a single machine is incredibly powerful."

"But when you have datasets larger than your laptop, or want to share
data across teams, you need the cloud."

"MotherDuck is serverless DuckDB - same performance and efficiency, but
with cloud storage, sharing, collaboration, and larger compute."
```

---

## Single Node Architecture (CRITICAL - Get This Right)

**The Problem:** People hear "single node" and think "this won't scale."

**Q: "Wait, it's single node? That's not going to work for us."**

**Step 1: Lead with scale out**
```
"We actually scale out to lots of different nodes."
```

**Step 2: Use the external-facing example**
```
"A good way to think about it - imagine you're powering an external-facing
application where you have lots of customers and need to think about concurrency.

Traditional warehouses require a big multi-tenant warehouse ready for whatever
bursting concurrency happens at 8am when all your customers load their reports.

What MotherDuck does is each tenant has its own isolated compute that only
executes when they run queries. No contention for resources, no over-scaling -
it works really fluidly.

This works for external use cases as well as internal. You might have a big
team of people loading reports or multiple jobs running simultaneously.
MotherDuck will always have appropriately sized compute for each query."
```

**Step 3: If they ask about scale up (big queries)**
```
"We also have different instance sizes - some very big, some very small -
purpose-built for different parts of your data stack.

You might use bigger instances for your transformation layer or ingestion,
and smaller ones for reads. Very granular control."
```

**Key phrases to use:**
- "We scale out to lots of nodes"
- "Each query gets isolated compute"
- "No contention for resources"
- "Different instance sizes for different workloads"
- "No other tool is architected this way"

**What NOT to say:**
- Don't say "single node" without immediately saying "but we scale out"
- Don't make it sound like everyone shares one node
- Don't get defensive - use the example above to make it sound innovative

> "Single node goes from 'I'm not going to do that' to 'this could actually be
> a unique way to solve some problems.' Also, no other tool is architected this way."

---

## Postgres Streaming

**Q: "How do we stream Postgres data into MotherDuck?"**
```
"Two phases:"

"1. Initial Load: Snapshot your Postgres, load into local DuckDB, push
   to MotherDuck. Fastest for bulk upload and testing."

"2. Ongoing Sync: CDC streaming with Estuary - captures all changes
   real-time and streams continuously. We work closely with their team,
   it's cost-effective, and has a free tier for trials."
```

---

## Concurrency / Multi-Tenancy

**Q: "How does MotherDuck handle concurrency?"**
```
"Each query gets its own isolated compute. So if you have 100 users
hitting reports at 8am, that's 100 separate instances spinning up
just for them - not contending for the same resources.

This is why we're really well-suited for external-facing apps or
multi-tenant use cases. You don't have to over-provision a warehouse
sitting idle, and you don't have contention problems."
```

---

## Cost Model

**Q: "How does pricing work?"**
```
"Simple - you pay for compute time, not data scanned.

Unlike Snowflake where you're paying for warehouse-hours even when idle,
we only charge when queries are actually running. And we scale to zero
between queries.

Most customers see 70%+ cost savings vs Snowflake or BigQuery."
```

---

## Pivot After Technical Questions
Don't go too deep - pivot to meeting:
```
"Rather than me going into all the details here, let me get you
in front of an engineer who can walk through your specific setup.

How's your calendar look later this week?"
```

→ [[08-Close/Standard Close]]
