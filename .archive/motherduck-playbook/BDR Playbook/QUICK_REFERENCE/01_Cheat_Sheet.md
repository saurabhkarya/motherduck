# BDR Quick Reference Cheat Sheet

*Print this. Keep it on your desk. Reference during calls.*

---

## 30-Second Pitch

> **"MotherDuck is a serverless data warehouse built on DuckDB—the fastest-growing analytics database. No infrastructure to manage, you only pay for what you use, and customers typically see 70% cost savings vs. Snowflake."**

---

## 5 Key Differentiators

| Say This | Why It Matters |
|----------|----------------|
| **Serverless** | Zero ops, instant start, no clusters |
| **70% cheaper** | Pay-per-query, no idle costs |
| **4x faster** | DuckDB benchmarks faster than BigQuery |
| **Hybrid execution** | Local + cloud, instant iteration |
| **AI-powered** | PROMPT QUERY, MCP server, auto-fix SQL |

---

## Target Personas (Who to Call)

| Persona | What They Care About | Lead With |
|---------|---------------------|-----------|
| **Data Engineer** | DX, local dev, speed | Developer experience |
| **CTO/VP Eng** | Simplicity, less ops burden | Zero infrastructure |
| **Data Analyst** | Fast queries, easy UI | Speed + AI features |
| **Founder/CEO** | Cost, simplicity | 70% savings |
| **CFO/Finance** | Predictable costs | No idle compute |

---

## Ideal Customer Profile

**Sweet Spot:**
- 10-500 employees
- GB to low-TB data (10GB - 2TB)
- Using or evaluating: Snowflake, BigQuery, Databricks, Redshift
- Pain: cost, complexity, slow development cycles

**Red Flags (DQ Fast):**
- Personal project / student / teacher
- Petabyte scale (10+ TB)
- Heavy ML/AI workloads (Databricks fit)
- No data use case at all

---

## Quick Qualification (BANT)

| Letter | Question | Good Answer |
|--------|----------|-------------|
| **B**udget | "Is there budget for data infrastructure?" | Yes, or "evaluating options" |
| **A**uthority | "Who makes the final call?" | They do, or can connect you |
| **N**eed | "What problem are you solving?" | Clear business use case |
| **T**imeline | "When do you need this?" | This quarter or next |

---

## Pricing Quick Reference

| Plan | Price | Best For |
|------|-------|----------|
| **Free** | $0 | Trying it out (10GB, 10 compute hrs) |
| **Lite** | Pay-as-you-go | Small teams, variable usage |
| **Business** | $100/mo + usage | Production, compliance, teams |

**Compute (Ducklings):**
- Pulse: $2/hr (bursty, ad-hoc)
- Standard: $8.25/hr (regular analytics)
- Jumbo: $16.50/hr (heavy ETL)

**Typical spend:** $50-200/month for most startups

---

## Top 5 Objections (Quick Responses)

| Objection | Response |
|-----------|----------|
| **"We use Snowflake"** | "What would need to change to consider alternatives? Many switch for 70% cost savings." |
| **"No budget"** | "Free tier has 10GB—enough to test. Want the link?" |
| **"Too expensive"** | "Compared to what? We're 70% cheaper than Snowflake." |
| **"Not ready yet"** | "What would make this a priority?" |
| **"Never heard of you"** | "Founded by the BigQuery team, backed by a16z. Free to try." |

*Full objection responses: [Objection Responses](./02_Objection_Responses.md)*

---

## The 5 Questions (Hit Every Call)

```
1. What are you working on?
2. What are you using now?
3. Why is it not working?
4. What happens if it doesn't get fixed?
5. Why are you exploring MotherDuck?
```

**If you haven't asked all 5, you're not done with discovery.**

*Full discovery guide: [Discovery Questions](./03_Discovery_Questions.md)*

---

## AI Features to Mention

| Feature | When to Mention | What to Say |
|---------|-----------------|-------------|
| **PROMPT QUERY** | Small team, no SQL experts | "Type questions in English, get SQL" |
| **AI FixIt** | SQL complexity frustration | "Auto-corrects SQL errors" |
| **MCP Server** | Uses Claude/Cursor | "Connect AI directly to your database" |

---

## Compliance Quick Reference

| Certification | Status | Plan |
|---------------|--------|------|
| **SOC 2 Type II** | Certified | Business |
| **GDPR** | Verified | All |
| **HIPAA BAA** | Available | Business |

---

## Meeting Ask Templates

**For Demo:**
> "Would it make sense to do a quick 15-minute demo so you can see how it works?"

**For SA Session:**
> "We offer sessions with our Solutions Architect to help optimize your setup—would that be helpful?"

**For Follow-up:**
> "Can I reach back out in [X weeks] when timing is better?"

---

## Daily Targets

| Metric | Target |
|--------|--------|
| Calls | 40-60 |
| Emails | 30-50 |
| LinkedIn | 15-25 |
| Conversations | 20-30/week |
| Meetings booked | 5-10/week |

---

## Quick Links: Objections & Pains

### Common Objections
| Objection | Quick Link |
|-----------|------------|
| Competitor (Snowflake, Databricks, BigQuery) | [Objection Responses](./02_Objection_Responses.md#competitor-objections) |
| Budget / Cost | [Objection Responses](./02_Objection_Responses.md#cost--budget-objections) |
| Timing / Not Ready | [Objection Responses](./02_Objection_Responses.md#timing-objections) |
| Technical Fit | [Objection Responses](./02_Objection_Responses.md#technical--fit-objections) |
| Security / Compliance | [Objection Responses](./02_Objection_Responses.md#security--compliance-objections) |

### Pain Points to Listen For
| Pain Signal | What It Means | Response |
|-------------|---------------|----------|
| "Queries are slow" | Performance issue | Lead with 4x faster than BigQuery |
| "Too expensive" | Cost pain | Lead with 70% savings |
| "Complex to manage" | Ops burden | Lead with serverless, zero ops |
| "Team can't write SQL" | Access pain | Mention PROMPT QUERY |
| "Scaling issues" | Growth problem | Discuss Ducklings sizing |

### Deep Dives
- [Master Discovery Framework](../Calls/Calls_Playbook.md#master-discovery-framework) - Full call structure
- [Full Objection Guide](../05_Objection_Handling/01_Common_Objections.md) - ACE framework
- [Competitive Battlecards](../06_Competitive_Intel/) - Snowflake, Databricks, BigQuery

---

*Last updated: February 2026*
