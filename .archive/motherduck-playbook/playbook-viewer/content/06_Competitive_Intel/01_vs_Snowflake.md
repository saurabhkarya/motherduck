# Battlecard: MotherDuck vs. Snowflake

## Quick Facts: Snowflake

| Attribute | Details |
|-----------|---------|
| **Founded** | 2012, IPO 2020 |
| **Positioning** | Enterprise cloud data warehouse |
| **Strengths** | Scale, brand recognition, ecosystem |
| **Weaknesses** | Cost, complexity, overkill for medium data |
| **Typical Customer** | Large enterprises, petabyte-scale |

---

## Head-to-Head Comparison

| Dimension | MotherDuck | Snowflake |
|-----------|------------|-----------|
| **Architecture** | Serverless + hybrid execution | Multi-cluster shared data |
| **Setup Time** | Minutes | Hours to days |
| **Infrastructure** | Zero management | Requires warehouse tuning |
| **Pricing Model** | Pay-per-query | Pay-per-second (warehouse uptime) |
| **Idle Costs** | None | Pay for running warehouses |
| **Local Development** | Yes (DuckDB) | No |
| **Minimum Cost** | $0 (free tier) | ~$2-3/credit minimum |
| **Typical Startup Cost** | $50-200/month | $500-2000/month |
| **Best Scale** | GB to low TB | TB to PB |

---

## Where We Win

### 1. Cost (70% Savings)
- No idle compute costs
- Pay only when queries run
- Hybrid execution uses free laptop compute
- No warehouse over-provisioning

**Proof Point**: "Definite cut warehouse costs by 70% switching from Snowflake."

### 2. Simplicity
- Zero infrastructure to manage
- No cluster sizing, no tuning
- Sign up → Query in minutes
- Perfect for small data teams

**Proof Point**: "No clusters to provision. Just write SQL."

### 3. Developer Experience
- Local development with DuckDB
- Same SQL local and cloud
- Instant feedback loops
- No waiting for warehouse spin-up

**Proof Point**: "10x faster iteration with local-first development."

### 4. Right-Sized
- Built for GB-TB, not petabytes
- No overkill infrastructure
- Scales smoothly
- Startup-friendly

**Proof Point**: "Enterprise power without enterprise complexity."

---

## Where Snowflake Wins (Be Honest)

| Area | Snowflake Advantage | Our Response |
|------|---------------------|--------------|
| **Massive scale** | Better for petabyte+ | "Are you actually at petabyte scale?" |
| **Brand recognition** | "No one gets fired for Snowflake" | "We're founded by BigQuery team, backed by a16z" |
| **Ecosystem** | Larger partner ecosystem | "We integrate with 25+ tools, growing fast" |
| **Enterprise features** | More mature RBAC, governance | "SOC 2, HIPAA available. Growing fast here." |

---

## Discovery Questions to Ask

When they mention Snowflake:

1. "How much are you spending on Snowflake monthly?"
2. "How much of that is idle warehouse time?"
3. "Who manages your Snowflake infrastructure?"
4. "How long does it take to spin up a new warehouse?"
5. "Any frustrations with the cost model?"

**Trigger answers**:
- "It's getting expensive" → Cost angle
- "We have a dedicated person" → Simplicity angle
- "Queries are slow sometimes" → Performance angle
- "Setup took forever" → Simplicity angle

---

## Handling Snowflake Objections

### "We're already on Snowflake"
```
"Snowflake's solid for large enterprises. Mind if I ask—how's 
the cost looking? A lot of teams find they're paying for capacity 
they don't need. MotherDuck typically saves 70%."
```

### "Snowflake has more features"
```
"Snowflake has a lot of enterprise features. The question is—do 
you need them? Most startups and mid-size teams don't use 80% of 
what Snowflake offers but pay for all of it."
```

### "We've invested a lot in Snowflake"
```
"I get it—switching costs are real. But if you're spending $X/month 
now, and could cut that by 70%, the ROI on switching would be 
[calculate]. Worth exploring at least?"
```

### "Our data team knows Snowflake"
```
"MotherDuck is SQL—same skills transfer. And because it's built 
on DuckDB, developers who use Python will feel right at home. 
The learning curve is actually shorter."
```

---

## Competitive Positioning

### When to Position Against Snowflake
- Startup or mid-market company
- Cost is a concern
- Small data team
- GB to low TB scale
- Frustrated with complexity

### When to Avoid the Fight
- True petabyte scale
- Deep Snowflake investment (multi-year contract)
- Heavy governance/compliance needs
- Complex multi-cloud requirements

---

## Landmine Questions to Ask

These questions expose Snowflake weaknesses:

1. "How much do you pay when no one's querying?"
2. "How long does it take to iterate on a complex query?"
3. "Who's responsible for warehouse sizing and tuning?"
4. "How's the local development experience?"
5. "What happens to your bill when someone leaves a warehouse running?"

---

## Quick Comparison Table (For Prospects)

| Need | Choose MotherDuck | Choose Snowflake |
|------|-------------------|------------------|
| Cost-conscious | ✅ | |
| Small data team | ✅ | |
| GB to TB scale | ✅ | |
| Fast setup | ✅ | |
| Developer experience | ✅ | |
| Petabyte scale | | ✅ |
| Complex governance | | ✅ |
| Large enterprise | | ✅ |
