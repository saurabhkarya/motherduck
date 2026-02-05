# Pricing Quick Guide

*Reference during pricing discussions. Know these numbers cold.*

---

## Plans at a Glance

| Plan | Platform Fee | Best For | Key Features |
|------|--------------|----------|--------------|
| **Free** | $0 | Trying it out | 10GB storage, 10 compute hours |
| **Lite** | $0 | Small teams | Pay-as-you-go, no commitment |
| **Business** | $100/mo | Production | SOC 2 report, HIPAA BAA, team features |

---

## Compute Pricing (Ducklings)

| Instance | $/Hour | Best For |
|----------|--------|----------|
| **Pulse** | ~$2/hr | Bursty, ad-hoc queries |
| **Standard** | ~$8.25/hr | Regular analytics |
| **Jumbo** | ~$16.50/hr | Heavy ETL, batch jobs |
| **Mega** | ~$33/hr | Enterprise scale |
| **Giga** | ~$66/hr | Large transformations |

**Note:** Pulse is pay-per-query (billed by compute used). Standard+ are per-hour when running.

---

## Storage Pricing

- **$23/TB/month** (after free allowance)
- Free tier: 10GB included
- Lite/Business: First 10GB free, then $23/TB

---

## Typical Customer Spend

| Customer Type | Monthly Spend |
|---------------|---------------|
| Solo developer | $0-20 |
| Small startup (5-10 people) | $50-200 |
| Mid-size company | $200-1,000 |
| Enterprise | $1,000+ |

**Most startups:** $50-200/month

---

## vs. Competitors

### vs. Snowflake
| Metric | Snowflake | MotherDuck |
|--------|-----------|------------|
| Min spend | ~$400/mo | $0 |
| Idle costs | Yes | No (Pulse) |
| Cost savings | Baseline | ~70% cheaper |

**Talk track:** "Customers typically see 70% cost reduction switching from Snowflake because you don't pay for idle compute."

### vs. BigQuery
| Metric | BigQuery | MotherDuck |
|--------|----------|------------|
| Query pricing | $5/TB scanned | Compute-based |
| Local dev | No | Yes (hybrid) |
| Performance | Baseline | 4x faster |

**Talk track:** "We benchmark 4x faster, and hybrid execution means free local compute for development."

### vs. Databricks
| Metric | Databricks | MotherDuck |
|--------|------------|------------|
| Complexity | High (clusters) | Zero (serverless) |
| Best for | ML/AI heavy | Analytics |
| Starting price | ~$150/mo | $0 |

**Talk track:** "If you're analytics-focused, we're simpler and cheaper. Databricks is great for heavy ML."

---

## Budget Qualification

### Quick Budget Check
```
"Is there budget allocated for data infrastructure?"
"What range are you working with?"
```

| Budget | Recommendation |
|--------|----------------|
| $0 | Free tier |
| $1-50/mo | Lite plan |
| $50-500/mo | Lite or Business |
| $500+/mo | Business plan |

---

## Handling Pricing Objections

### "It's too expensive"
```
"Compared to what? We're 70% cheaper than Snowflake.
Most startups spend $50-200/month total."
```

### "We don't have budget"
```
"Free tier gives you 10GB and 10 compute hours—
enough to test and build a business case."
```

### "Free tier is all we need"
```
"Great for getting started. As you grow, Lite plan
is pay-as-you-go with no platform fee."
```

### "Why pay for Business plan?"
```
"Business gets you SOC 2 Type II report access,
HIPAA BAA, team management, and priority support.
Essential for production and compliance."
```

---

## Startup Program

- **50% discount** for qualified startups
- Criteria: <$5M raised, <50 employees
- Contact: startup@motherduck.com

**Talk track:** "We have a startup program with 50% off for early-stage companies. Want me to check if you qualify?"

---

## Enterprise Pricing

- Custom pricing for large deployments
- Volume discounts available
- Dedicated support options
- Contact sales for >$5K/month expected spend

---

## Quick Comparison Table (Memorize This)

| Feature | Free | Lite | Business |
|---------|------|------|----------|
| Storage | 10GB | Pay-as-go | Pay-as-go |
| Compute | 10 hrs | Pay-as-go | Pay-as-go |
| Platform fee | $0 | $0 | $100/mo |
| SOC 2 report | No | No | Yes |
| HIPAA BAA | No | No | Yes |
| Team features | No | Limited | Yes |
| Support | Community | Email | Priority |

---

## Pricing Conversation Flow

```
1. Understand their budget range first
   "What budget are you working with?"
        ↓
2. Match to appropriate plan
   Free ($0) → Lite ($0) → Business ($100)
        ↓
3. Estimate their likely spend
   "Based on [data volume], you'd probably spend [X]/month"
        ↓
4. Compare to current/alternative
   "That's [70%] less than Snowflake for the same workload"
        ↓
5. Handle objections if needed
   Use responses above
```

---

---

## Quick Links: Objections & Pains

### Pricing-Related Objections

| Objection | Response | Deep Dive |
|-----------|----------|-----------|
| "Too expensive" | "Compared to what? 70% cheaper than Snowflake" | [Objection Responses](./02_Objection_Responses.md#its-too-expensive) |
| "No budget" | "Free tier has 10GB to test and build business case" | [Objection Responses](./02_Objection_Responses.md#we-dont-have-budget) |
| "Free tier is enough" | "Great for starting. Lite is pay-as-go when you grow" | [Objection Responses](./02_Objection_Responses.md#free-tier-is-all-we-need) |
| "Why pay for Business?" | "SOC 2 report, HIPAA BAA, team features, priority support" | [Pricing Plans](../01_Company_Knowledge/03_Pricing_Plans.md) |

### Cost Pain Discovery

| If They Say... | Follow-Up | Position |
|----------------|-----------|----------|
| "Snowflake is expensive" | "What are you spending today?" | "We're typically 70% cheaper, no idle costs" |
| "BigQuery costs unpredictable" | "How do you budget for queries?" | "Compute-based pricing, more predictable" |
| "Overpaying for capacity" | "How much data do you actually query?" | "Pay for what you use, not reserved capacity" |

### When to Discuss Pricing

**Too Early:**
- Before understanding their use case
- Before qualifying budget/authority
- When they just want to explore

**Right Time:**
- After pain is established
- When they ask directly
- During next-steps discussion

### Related Resources
- [Objection Responses](./02_Objection_Responses.md#cost--budget-objections) - Budget objections
- [Master Discovery](../Calls/Calls_Playbook.md#master-discovery-framework) - When cost comes up in discovery
- [vs. Snowflake](../06_Competitive_Intel/01_vs_Snowflake.md) - Cost comparison
- [Full Pricing Details](../01_Company_Knowledge/03_Pricing_Plans.md)
