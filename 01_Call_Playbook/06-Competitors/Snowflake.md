# Handling Snowflake
**When they use or mention Snowflake**

---

## Quick Acknowledge
```
"Snowflake's a solid product - a lot of our customers came from
Snowflake actually."
```

---

## The Core Insight

> "Snowflake was built for a world that never existed."

- Founded 2012 - peak "big data is coming" era
- Assumed everyone would query petabytes daily
- Reality: 99% of queries fit on a single modern server
- Snowflake forces them through complex multi-node distributed systems

**MotherDuck POV:** We're built for how data teams actually work today.

---

## Why Teams Switch (70-90% Cost Savings)

| Pain Point | Snowflake | MotherDuck |
|------------|-----------|------------|
| **Billing** | Per warehouse-hour (60-sec minimum) | Per second (scales to zero) |
| **Idle Costs** | Paying for warehouses sitting idle | Only pay when queries run |
| **Cold Starts** | Warehouses need to spin up | Instant query execution |
| **Pricing** | Complex credits, surprise bills | Simple, predictable |

---

## Landmine Questions
Plant these to surface pain:
```
"How much do you pay when no one's querying?"
"Who's responsible for warehouse sizing and tuning?"
"What happens when someone leaves a warehouse running?"
"How many warehouses do you have that are underutilized?"
```

---

## Objection Handling

### "Can MotherDuck scale to petabyte-level like Snowflake?"
```
"Built for the 99% of workloads at terabyte scale - where most teams
actually are. We deliver better performance at fraction of the cost.
Can query 10s of terabytes at a time."
```

### "Snowflake has more integrations and ecosystem"
```
"DuckDB has rapid innovation velocity. We work closely with customers
to prioritize features. Early adopters partnering with innovative
technology prove strategic over time."
```

### "Our team knows Snowflake - migration would be costly"
```
"Speaks standard SQL, dbt works with minimal changes. Most customers
running in days. Cost savings justify the effort."
```

### "We're already committed to Snowflake spend"
```
"Use MotherDuck alongside Snowflake for a hybrid approach. Move
serving-layer/gold-tier analytics first. Keep Snowflake for certain
workloads while reducing costs elsewhere."
```

---

## The Hybrid Approach (Don't Pitch Rip-and-Replace)
```
"I'm not suggesting you rip anything out."

"Start with MotherDuck for customer-facing analytics and reporting
alongside Snowflake. Expand to transformation layers as confidence
builds."
```

---

## Key Quote to Use
> "As the CTO of FourSquare said, Snowflake built their business around
> a model that profits from compute consumption. Every time you write
> a suboptimal job, they make more money."

> "MotherDuck takes the opposite approach: we optimize for usage-efficiency.
> We don't profit from inefficient compute, so our incentives are aligned
> with helping you do more with less."

---

## Customer Proof Points

**Recurrency (Pierrick Ganon, VP Engineering):**
> "Because of the performance, we thought, why not try to shift all
> Snowflake workloads to MotherDuck? We were able to eliminate it
> from our stack, saving a good amount of money every year."

**DoSomething (Non-profit, 200 people):**
- Replaced Snowflake evaluation
- TCO was much better with MotherDuck
- Non-technical team members now self-serve analytics

**Gardyn (IoT/Agriculture):**
- 10x cheaper than Snowflake
- Reduced pipeline from 24+ hours to under 1 hour

---

## AI Positioning vs Snowflake Cortex

```
"Snowflake has Cortex, but it's add-on pricing. Our AI features
are built in—PROMPT QUERY is included on all plans."
```

**Key Differentiator:**
- Snowflake Cortex = extra cost, complex setup
- MotherDuck PROMPT QUERY = included, works out of the box
- MCP Server = connects Claude/Cursor directly to your data

---

## Red Flags: When to Walk Away
- Actually querying multi-petabyte data daily
- Heavy governance/compliance requirements
- Deeply invested in Snowflake ecosystem (Snowpark, Streamlit)
- Need 24/7 support SLAs and enterprise certifications
- Hundreds of concurrent users with complex role hierarchies

---

## Close
→ [[08-Close/Competitor Close]]
→ [[07-Pre-Close/Cost Pre-Close]]
