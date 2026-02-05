# Handling Redshift
**When they use or mention Redshift**

---

## The Core Insight

> "Redshift is 2012 technology - a legacy cluster animal built for
> 'always on, always provisioned.' Most teams oversize clusters
> for peak season which never comes."

- Built on 2005-era Postgres engine stretched across clusters
- Serverless still requires minimum RPUs, doesn't scale to zero
- Benefits from same tuning as clusters = overhead never goes away

---

## Why Teams Switch

| Pain Point | Redshift | MotherDuck |
|------------|----------|------------|
| **Startup** | Minutes to spin up | Instant queries |
| **Billing** | Cluster uptime (idle waste) | Pay only for compute used |
| **Performance** | 1/7th to 1/11th our speed | Vectorized execution |
| **Maintenance** | VACUUM, WLM tuning, slice redistribution | Zero ops |
| **Local Dev** | No local mode | DuckDB on your laptop |

---

## Performance Comparison
From ClickBench benchmarks:
- **4x ra3.xlplus ($4.34/hr):** Less than 1/7th MotherDuck Jumbo performance
- **2x dc2.8xlarge ($9.60/hr):** 1/11th MotherDuck Mega performance

---

## Landmine Questions
```
"What happens when someone leaves a cluster running over the weekend?"

"How long does your team spend on VACUUM, WLM tuning, and maintenance?"

"Can your analysts test queries locally before running on production?"
```

---

## Objection Handling

### "But Redshift is mature and reliable"
```
"True - and aging. Mature like a 2012 Honda Civic. Safe, steady,
but not built for modern workflows."
```

### "We're deep in the AWS ecosystem"
```
"Great - MotherDuck plays well with S3 and AWS infra. You don't lose
any AWS goodness; you just stop paying for idle clusters."
```

### "We need big-warehouse scale"
```
"DuckLake + DuckDB + MotherDuck handle large workloads just fine.
If you truly need petabyte MPP scale, Redshift wins - but less than
1% of companies do."
```

---

## Customer Proof Points

**Trunkrs (on Redshift pain):**
> "It takes a lot of work to optimize Redshift. We had to scale for that.
> And it wasn't cost efficient."

> "Even if it just takes 10 seconds longer, that's annoying if you're
> in a call trying to get to the bottom of a problem."

**On MotherDuck's impact:**
> "With MotherDuck, we're seeing that response is just a lot snappier.
> We can see that we're just going deeper because we have more time
> to spend on the data."

> "It really makes your data feel like an application. A lot of that
> bother is already taken away."

---

## Red Flags: When to Walk Away
- Deep AWS integration requirements (data never leaves ecosystem)
- AWS Enterprise Discount Programs (Redshift essentially "free")
- Legacy systems with years of Redshift-specific optimizations
- Strict requirements to keep all infrastructure within AWS

---

## The Cost Angle
```
"AWS customers know cluster waste all too well. You're paying whether
nodes are hunting or napping. MotherDuck = real pay-as-you-go, no
warm-up, no cluster babysitting."
```

---

## Close
→ [[08-Close/Competitor Close]]
→ [[07-Pre-Close/Cost Pre-Close]]
