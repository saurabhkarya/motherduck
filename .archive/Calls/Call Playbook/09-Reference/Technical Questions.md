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

## Single-Node vs Distributed

**Q: "What about single-node vs. distributed?"**
```
"Distributed systems split data across many machines, break queries into
pieces, and shuffle results across the network. Great for petabytes, but
adds latency and complexity for smaller datasets."

"Single-node (MotherDuck): Each query runs on one powerful machine, data
is local to compute, no shuffling. Faster for analytical queries, simpler,
and you only pay for compute time - not data scanned."

"Sweet spot: GB to ~10TB. Above that, distributed might make sense."
```

---

## Pivot After Technical Questions
Don't go too deep - pivot to meeting:
```
"Rather than me going into all the details here, let me get you
in front of an engineer who can walk through your specific setup."
```

→ [[08-Close/Standard Close]]
