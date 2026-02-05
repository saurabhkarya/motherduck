# AE/CE Sales Team Insights ("The Jungle")
*Comprehensive guide derived from the AE/CE sales team Slack channel (Apr 2025 - Jan 2026)*

---

## Quick Navigation
- [Sales Philosophy](#sales-philosophy)
- [Deal Qualification & Focus](#deal-qualification--focus)
- [Pricing & Sizing](#pricing--sizing)
- [Closing Tactics](#closing-tactics)
- [Competitive Talk Tracks](#competitive-talk-tracks)
- [Partner Ecosystem](#partner-ecosystem)
- [Instance Types & Technical Specs](#instance-types--technical-specs)
- [AE/CE Pairings & Coverage](#aece-pairings--coverage)
- [Tools & Processes](#tools--processes)
- [Discovery Best Practices](#discovery-best-practices)
- [Call Library & Examples](#call-library--examples)
- [Key Resources](#key-resources)

---

## Sales Philosophy

### CEO of Your Patch Mentality
Each AE is the **CEO of their patch**, with their CE as the **CTO**. BDRs are partners in driving pipeline.

> *"Ask yourself as the CEO or CTO of your patch: where would you spend your time? Despite having 10, 20, 30, or even 40 opportunities, only a handful have meaningful consumption potential."*

### Focus on Second Workloads
When evaluating deals, don't focus only on the first workload—focus on the **second workload that the first unlocks**. That's where the long-term value lives.

### Logo-Level vs. Self-Serve
**Logo-level** = $500/mo+ potential (worth dedicated AE/CE time)

For smaller accounts:
- Send to community Slack with docs
- Let them self-serve
- Minimize hand-holding
- Tag deals as "Growth Account" in HubSpot

> *"If workload is real but small and org is small, keep as sales or customer pipeline but tag as 'growth' to note that it's being worked with less intention."*

---

## Deal Qualification & Focus

### Qualification Fields (Required)
When moving a deal from Pre-Qualification to Qualified, fill in:
1. **Sales Deal Size**: Small, Medium, or Large
2. **Data Freshness Required**: Weekly, Daily, Hourly, or Instant
3. **Number of Users**: 1-100, 101-1000, or 1000+

### Deal Amount Estimation Matrix
| Size | Freshness | Est. Annual Value |
|------|-----------|-------------------|
| Small | Daily | $5K-15K |
| Medium | Hourly | $20K-50K |
| Large | Instant | $50K-150K+ |

### Deal Blockers (Track These)
Use the multi-select "Deal Blocker" field:
- Feature requirements
- Security/compliance needs
- Timeline constraints
- Budget approval
- Technical validation

### When to Push vs. Farm
**Push hard on:**
- Accounts with $50K+ ARR potential
- Customers with clear pain ("Level 2 Pain")
- Time-sensitive evaluations
- Competitive situations

**Farm/nurture:**
- Small self-serve accounts
- No urgency or budget
- Exploratory/tire-kicking
- Feature-blocked with no workaround

---

## Pricing & Sizing

### Instance Types
| Instance | CPU Ratio | Memory Ratio | Use Case |
|----------|-----------|--------------|----------|
| **Pulse** | 1x | 1x | Light queries, prototyping |
| **Standard** | 3x | 4x | Production workloads |
| **Jumbo** | 6x | 8x | Heavy analytics, large data |

> *"Aggressively serverless" = Pulse instances for dynamic, cost-efficient workloads*

### Pricing Discussion Tips
- **Don't lead with Lite plan** - it confuses pricing discussions
- Focus on Business plan value props (features, support, compliance)
- Use draft invoices in Orb to estimate costs during trial
- For trial extensions: "Your compute would only run $5-10/mo based on current usage"

### Sizing Customer Questions
When prospects ask about instance capacity:
- Refer to ClickBench comparisons
- Focus on what problem they're solving, not raw specs
- Explain that query optimization often matters more than instance size

### Annual Contracts
**Push for annuals when:**
- Customer is ramping usage
- Clear production timeline
- Budget approval process requires fixed costs
- Customer in startup program (credits apply)

**Annual contract tactics:**
1. Position as commitment to partnership
2. Offer startup program credits
3. Emphasize predictable budgeting
4. Use deadline/milestone to accelerate

---

## Closing Tactics

### EOQ Plays to Run

**1. Ambiguous Technical Blocker / Slow Deal**
```
"Hey, I know we were making some forward progress, but it seems like
we've stalled a bit. Maybe I'm missing something—can you help me understand?"
```
Define the blocker, then remove it.

**2. Slow-Moving Customer Work**
```
"Hey, just checking in. I know we were working toward [X], but I'm a
bit worried we're not making progress. Anything I might be missing?"
```
Define blocker or motivate them to get going again.

**3. The Direct Ask (Cheesy but Works)**
For pro-MotherDuck users dragging feet:
```
"Hey, I just wanted to connect—we're really close to hitting a few
big milestones this month, and it'd mean a ton if we could pull any
of the work planned for next month into next week. Totally understand
if not, but figured I'd ask."
```
> *"People like us, they want to help us, they want to be part of our story."*

**4. Challenge / Reverse It**
When customer hesitates, flip the frame:
```
"Totally fair if you want something all-in-one. Databricks is great if
you don't mind paying 4x. From what I understand, we solved this first
analytics use case, but maybe it doesn't make sense to go further?
Happy to send some resources if you want to revisit."
```
Makes them *opt back in*.

### Negotiation Techniques
- **Don't over-explain** - State your position and stay quiet
- **Assert timing** - "Let's sign Friday" (they'll counter with something reasonable)
- **Use milestones** - Product releases, budget cycles, team changes
- **Remove objections one by one** - Don't try to solve everything at once

---

## Competitive Talk Tracks

### vs. Snowflake (General)
```
"Snowflake scales through brute force—adding more compute. This leads
to over-provisioning and higher costs.

MotherDuck optimizes performance at the core, so queries run faster
without unnecessary scaling. Better execution = less compute = lower cost."
```

### Key Snowflake Differentiators
1. **Speed Without Overhead**: Query optimizations (30-40s → under 3s) without extra compute
2. **Smarter Concurrency**: Dynamic allocation vs. scaling out warehouses
3. **Lower I/O**: Hot data in memory vs. high I/O traffic
4. **Hybrid Execution**: Local dev is free; cloud only when needed

### The Foursquare CTO Quote (Use This!)
> *"Snowflake and Databricks built their businesses around models that profit from compute consumption. Every time you write a suboptimal job, they make more money. MotherDuck takes the opposite approach: we optimize for usage-efficiency and simplicity."*

### vs. ClickHouse
- Originally built for streaming—weird SQL syntax, doesn't do joins well
- MotherDuck offers standard SQL, easier development experience

### vs. Databricks
- Great for ML workloads, but overkill for pure analytics
- MotherDuck is simpler and more cost-effective for analytics use cases
- Many teams use MotherDuck alongside Databricks

### vs. BigQuery
- MotherDuck benchmarks **4x faster**
- Hybrid execution allows local compute (BigQuery can't do this)
- Cost savings often exceed "bundled" GCP benefit

---

## Partner Ecosystem

### Consulting Partner Overview

| Partner | Specialty | Region | Notes |
|---------|-----------|--------|-------|
| **CorrDyn** | Migrations, CFA, internal BI | AMER | OG partner, most deal experience |
| **Astro Data** | CFA / data apps | AMER | Bring into CFA deals |
| **Shearwater Data** | Looker-Snowflake to Omni-MD | West Coast | Ex-Looker folks |
| **Endeavor** | Implementations | East Coast | CEO very sharp, based in CT |
| **BrainForge** | Startups | AMER | Great ICP overlap |
| **Tasman** | Omni, dbt, BI | AMS/EMEA | Good seller, potential CorrDyn for EMEA |
| **Crescent** | Low-cost implementations | AMS | Small shop, hungry |
| **Snowpack** | Looker, modern data stack | EMEA/AMER | Ex-Flexport data team |
| **Xebia/Artefact** | Enterprise | Global | Larger firms, Databricks partners |
| **Codecentric** | Software/data engineering | DACH | Big DuckDB fans |
| **Outlier** | Startups | AMER | Switching from BQ focus |

### Migration Funding Program
- **Fund up to 100% of annual contract** for migrations using SI partner
- Small migrations estimated at **$20-25K**
- Annual deal needs to be at least that size
- Emphasize: "We will cover egress"

### BI Partners
- **Omni**: Primary BI partner
- **Holistics**: Looker knock-off, lower price (good for when Omni too expensive)
- **Zenlytic**: Internal use case partner

---

## Instance Types & Technical Specs

### Compute Instances
- **Pulse**: Smallest, most cost-efficient, "aggressively serverless"
- **Standard**: Production workloads, balanced
- **Jumbo**: 192 cores, 1.1TB memory for heavy analytics

### Read Scaling
- Required for customer-facing apps with concurrent users
- Lite plan includes basic; Business plan includes advanced
- Not all BI tools support it yet (e.g., Metabase has limitations)

### Members vs. Service Accounts
- **Members** = Users + Service Accounts
- **Service Accounts** = API-generated users for tools/apps (auth via tokens only)
- Lite plan: 5 members; Business plan: Unlimited

### DuckLake Highlights (v1.4+)
- Checkpoint simplifies maintenance
- Inline data flushing per table/schema
- Faster writes (separate file per thread)
- MERGE INTO support for upserts
- ZSTD compression for JSON

---

## AE/CE Pairings & Coverage

### Current Pairings (Jan 2026)
| AE | CE | Region |
|----|-----|--------|
| Bill | Hannah | East |
| Audrey | Alex, Dermott | East |
| Neil | Logan, Hannah | East |
| Logan | Hannah | West |
| Scott | Various | All |
| Bendik | Leo | EU |

### Calendly Setup
- Use pool-based Calendly for new intros
- Check pairing doc before booking
- **Don't book over CE support slots** unless absolutely necessary
- Check for rogue Calendly links periodically

### Coverage Requests
When OOO or conflicted:
1. Post in channel with specific meeting details
2. Tag potential coverage (AE + CE)
3. Offer to reschedule if no coverage available
4. Update Calendly settings in advance

---

## Tools & Processes

### HubSpot Best Practices
- **Deal Workspace**: Pre-meeting notes visible to team
- **Deal Tags**: Key, Core, Starter (for pipeline rollup)
- **Feature Blocker field**: Multi-select top 10 blockers
- **Omni link**: Customer 360 dashboard on every org
- Attach architecture diagrams as deal attachments

### Fathom Call Recording
- **Do NOT auto-share recordings** with attendees
- Keep good calls for enablement library
- Use Fathom search to find competitive/pricing examples
- Take clips and share in channel

### Orb / Billing
- Draft invoices show estimated costs for trials
- Check Compute view for Pulse/Standard/Jumbo breakdown
- Use for sizing conversations with prospects

### Omni Dashboards
- **Customer Terminal**: AWR, usage overview
- **Customer 360**: Comprehensive customer view (replaces Orb for viewing)
- **BDR Terminal**: Lead and meeting tracking

### Architecture Info Email Template
Send pre-discovery to gather intel:
```
Before our call, it would help to understand your current setup:
- What's your current data warehouse? (Snowflake, BigQuery, etc.)
- Approximate data volume?
- Key use cases? (BI, data apps, ML, etc.)
- Any specific requirements? (Compliance, latency, etc.)
```

---

## Discovery Best Practices

### Pre-Call Prep
1. Check HubSpot for deal notes from BDR
2. Look for org in Omni to see existing usage
3. Check if they're in trial (Orb shows billing status)
4. Review any architecture diagrams attached
5. Search for their company in existing customer base

### Discovery Questions for OLTP Users
When someone is using Postgres/OLTP today:
- "What analytics queries are you running against it?"
- "How's the performance when you need to aggregate?"
- "Are reports slowing down your transactional system?"
- "Have you considered separating analytics workloads?"

### Sizing Questions
To estimate deal value, understand:
1. Data volume (GB/TB)
2. Query frequency and concurrency
3. Freshness requirements (real-time vs. batch)
4. Number of users/applications querying
5. Current spend on data infrastructure

### Compliance Questions
- **DPA** (Data Processing Addendum): For GDPR/CCPA compliance
- **BAA** (Business Associate Agreement): For HIPAA/healthcare data
- Both available; BAA gated behind Business plan
- Introduce Eric E (security) for detailed reviews

---

## Call Library & Examples

### Must-Watch Calls (From Fathom)
| Call | Key Learning |
|------|--------------|
| Gecko call | Good competitive positioning |
| RepairWise with Jim | Converting "cash-strapped" to annual deal |
| Neil pushback call | Challenging "all-in-one" objection |
| Bricklane challenge | Flip the frame technique |
| Pricing/annual setup | How to position and soft-close |

### Good Call Characteristics
- Good competitive comparison
- Effective pricing talk track
- Objection handling in action
- Discovery that uncovers real pain

### Call Recording Tips
- Use Google Meet captions for thick accents
- Take clips of key moments
- Don't share recordings externally without review
- Add to enablement library with context

---

## Key Resources

### Documentation Links
- [MotherDuck AI Features](https://motherduck.com/docs/category/ai/)
- [PROMPT docs](https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/prompt/)
- [PROMPT_SQL docs](https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/)
- [EMBEDDING docs](https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/embedding/)
- [Trust & Security](https://motherduck.com/trust-and-security/#Compliance)

### Demo Resources
- **Ecommerce demo (Astro Data)**: Customer-facing app demo
- **DuckLake slides**: Architecture diagrams for technical discussions
- **ClickBench**: Pre-filtered to show MotherDuck #1

### Internal Docs
- AE/CE Pairing Spreadsheet
- SDR/AE Process Alignment doc
- QBR Template
- Consulting Partners Battle Card

### External Validation
- [Hoyt Emerson YouTube Review](https://www.youtube.com/watch?v=TeKXwuYjAHs) - 40min unbiased review (great for BQ users)
- Foursquare CTO LinkedIn post on MotherDuck vs. Snowflake/Databricks

---

## Quotes to Remember

> *"Time Kills All Deals"*

> *"We have five customers paying over $50K in ARR, and likely another 10+ in our base with that potential if we can unlock it."*

> *"Customers who grow have a real, urgent problem ('Level 2 Pain'). Many sign up to explore, but without deep understanding of their use case and impact, the deal won't move."*

> *"The instant SQL demo is so good—it showcases dual execution in a way that applies to data engineers."*

> *"We don't profit from inefficient compute, so our incentives are aligned with helping you do more with less."*

---

## Security & Compliance Quick Reference

| Topic | Response |
|-------|----------|
| **Security certifications** | SOC 2 Type II, GDPR verified |
| **HIPAA** | BAA available on Business plan |
| **DPA** | Available for all paid plans |
| **Data residency** | US region live, EU (Frankfurt) available |
| **Security review** | Introduce Eric E for questionnaire |

---

*Last updated: January 2026*
*Source: #the-jungle AE/CE Sales Team Channel*
