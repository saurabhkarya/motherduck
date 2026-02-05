# MotherDuck Pricing Plans

Understanding pricing is critical for qualification and handling objections. Here's everything you need to know.

---

## Plan Overview

| Plan | Monthly Cost | Best For |
|------|--------------|----------|
| **Free** | $0 | Hobbyists, evaluation, POCs |
| **Lite** | Pay-as-you-go | Small teams, individuals |
| **Business** | $100/month + usage | Growing teams, production workloads |

---

## Free Plan

**Cost**: $0/month

**Includes**:
- 10 GB storage
- 10 Compute Unit (CU) hours/month
- Pulse compute instances
- Full feature access

**Best For**:
- Hobbyists and side projects
- Evaluation and proof of concepts
- Learning DuckDB/MotherDuck

**Talking Point**:
> "Start free with 10GB and 10 compute hours. No credit card required. Upgrade when you need more."

---

## Lite Plan

**Cost**: Pay-as-you-go (no platform fee)

**Includes**:
- Everything in Free
- Standard compute instances
- Increased limits
- Email support

**Best For**:
- Small teams (2-5 people)
- Growing hobby projects
- Early analytics use cases

**Talking Point**:
> "Lite is perfect for small teams just getting started with analytics. Pay only for what you use, scale up when ready."

---

## Business Plan

**Cost**: $100/month platform fee + usage

**Includes**:
- Everything in Lite
- Jumbo compute instances
- Read Scaling (auto-scale for BI)
- SSO / SAML
- SOC 2 Type II compliance
- HIPAA BAA available
- Priority support

**Best For**:
- Production workloads
- Larger teams (5+ people)
- Compliance requirements
- Customer-facing analytics

**Talking Point**:
> "Business plan is $100/month plus usage—includes enterprise security, compliance docs, and auto-scaling for production workloads."

---

## Compute Pricing

### Duckling Types

| Duckling | Description | Billing Model |
|----------|-------------|---------------|
| **Pulse** | Burstable, auto-scaling | Per-query (Compute Units) |
| **Standard** | Balanced performance | Per-hour uptime |
| **Jumbo** | Heavy workloads | Per-hour uptime |

### Pulse (Pay-Per-Query)
- Billed on CPU seconds + memory over time
- Best for: Ad-hoc queries, bursty workloads, read-heavy apps
- No idle costs—only pay when queries run

### Standard/Jumbo (Pay-Per-Instance)
- Billed on uptime (like traditional warehouses)
- Predictable costs for steady workloads
- Better for: Batch ETL, scheduled jobs

---

## Pricing Comparison

### vs. Snowflake
| Aspect | Snowflake | MotherDuck |
|--------|-----------|------------|
| Minimum spend | ~$2-3/credit, warehouse minimums | $0 (Free tier) |
| Idle costs | Pay for running warehouse | None (Pulse) |
| Typical startup cost | $500-2000/month | $50-200/month |

### vs. BigQuery
| Aspect | BigQuery | MotherDuck |
|--------|----------|------------|
| On-demand pricing | $5/TB scanned | Compute Units |
| Slot reservations | Complex pricing | Simple tiers |
| Free tier | 1TB/month queries | 10 CU hours |

---

## Qualification by Budget

| Budget Signal | Recommended Plan | Notes |
|---------------|------------------|-------|
| "We have no budget" | Free | POC, evaluate first |
| "< $100/month" | Lite | Small team, getting started |
| "$100-500/month" | Business | Production-ready |
| "$500+/month" | Business | Discuss volume discounts |

---

## Common Pricing Questions

### "How much will we spend?"
> "It depends on your query volume and data size. Most startups spend $50-200/month. We have a free tier to test before committing."

### "How does this compare to Snowflake?"
> "Customers typically see 70% cost savings. The main difference is no idle compute costs—you only pay when queries run."

### "What if we grow?"
> "MotherDuck scales with you. Start on Free, move to Lite, then Business. No migration required."

### "Are there volume discounts?"
> "Yes, for larger commitments. Let's connect you with an AE to discuss."

---

## Startup Program

**Eligibility**:
- < $5M in funding (including bootstrapped)
- < 20 employees
- New customer or on Free plan

**Benefits**:
- Extended free credits
- Dedicated support
- Office hours access

**Talking Point**:
> "We have a startup program with extended credits for early-stage companies. Are you under $5M raised?"

---

## Compliance by Plan

Understanding which compliance features are available on each plan:

| Compliance Feature | Free | Lite | Business |
|-------------------|------|------|----------|
| GDPR Verified | ✅ | ✅ | ✅ |
| EU Data Region | ✅ | ✅ | ✅ |
| Data Processing Agreement | ✅ | ✅ | ✅ |
| SOC 2 Type II Report | ❌ | ❌ | ✅ |
| HIPAA BAA | ❌ | ❌ | ✅ |
| Security Questionnaire Support | ❌ | ❌ | ✅ |

### When to Upgrade for Compliance

**Prospect needs SOC 2 report?** → Business Plan required

**Prospect in healthcare (HIPAA)?** → Business Plan required

**Prospect has EU customers (GDPR)?** → Any plan works, DPA available

**Learn More**:
- [SOC 2 Type II Explained](../08_Reference_Materials/Compliance/01_SOC2_Type_II_Explained.md)
- [GDPR Explained](../08_Reference_Materials/Compliance/02_GDPR_Explained.md)
- [HIPAA Explained](../08_Reference_Materials/Compliance/03_HIPAA_Explained.md)
- [Security Features Overview](../08_Reference_Materials/Compliance/04_Security_Features.md)
