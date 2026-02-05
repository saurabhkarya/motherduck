# Handling ClickHouse
**When they mention ClickHouse as an alternative**

---

## Quick Acknowledge
```
"That's a common comparison. ClickHouse is great for massive real-time
ingestion. Netflix and CloudFlare run it at incredible scale."
```

---

## The Core Insight

> "ClickHouse requires constant tuning because there's no query optimizer.
> You must choose primary keys, partition keys, skip indexes, and
> materialized views carefully - or your queries are 2-10x slower."

**The Tuning Tax:**
- No cost-based optimizer
- Manual primary key ordering
- Manual partition key definition
- Manual skip indexes
- Manual materialized views

---

## Why Teams Switch

| Pain Point | ClickHouse | MotherDuck |
|------------|------------|------------|
| **Setup** | Days (self-hosted) or hours (Cloud) | Minutes |
| **Tuning** | Constant manual optimization | Auto-optimized |
| **Joins** | Bad at joins (denormalized only) | Lightning fast joins |
| **SQL** | Custom dialect (learning curve) | PostgreSQL-compatible |
| **Local Dev** | No local mode | DuckDB on your laptop |
| **Updates** | Append-only, no ACID | Full update support |

---

## Landmine Questions
Plant these to surface pain:
```
"You've spent months optimizing ClickHouse. MotherDuck optimizes itself.
What could your team build instead?"

"How's ClickHouse handling your complex joins?"

"How long did it take your team to learn ClickHouse's SQL dialect?"
```

---

## The Tuning Tax Reframe
```
"ClickHouse is cheap in compute costs but expensive in DBA time.
We're cheaper when you factor in your DBA's salary."
```

---

## Objection Handling

### "ClickHouse is more mature and battle-tested"
```
"Absolutely. Netflix, Spotify, CloudFlare run massive ClickHouse deployments.
But maturity doesn't equal ease of use. ClickHouse requires tuning to unlock
performance; MotherDuck auto-optimizes. For greenfield analytics, MotherDuck
gets you to value faster without hiring a ClickHouse expert."
```

### "We need massive real-time ingestion (12M+ events/sec)"
```
"ClickHouse is proven there - CloudFlare does 75B events/day. But do you
really need that scale? If you're at 100M-1B events/day, MotherDuck handles
it with less ops burden."
```

### "We're already invested in ClickHouse"
```
"Don't rip it out. MotherDuck is better for new analytics initiatives.
Go hybrid: ClickHouse for real-time dashboards, MotherDuck for ad-hoc
analytics and exploratory work."
```

---

## The Joins Advantage
```
"The most well-known ClickHouse weakness: joins suck. MotherDuck is
lightning fast with joining multiple tables. If your queries need
complex joins, that's a huge difference."
```

---

## Customer Proof Point

**Trunkrs Case Study:**
> "It takes a lot of work to optimize ClickHouse. We had to scale for that.
> It wasn't cost efficient."

> "With MotherDuck, we're seeing that response is just a lot snappier.
> We can see that we're just going deeper because we have more time
> to spend on the data."

> "It really makes your data feel like an application. With ClickHouse,
> that's more of a bother."

---

## Red Flags: When to Walk Away
- True petabyte-scale like Netflix/Spotify/CloudFlare
- Billions of events per day with sub-second ingestion
- Observability/logs as primary use case
- Existing ClickHouse investment (2+ years of tuning)
- Strict open-source/on-prem requirements

---

## The Hybrid Play
```
"Many companies use both. ClickHouse for stable dashboards you run
1000x. MotherDuck for questions you've never asked before."
```

---

## Close
→ [[08-Close/Competitor Close]]
