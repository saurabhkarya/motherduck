# Role-Play: Maria, Data Engineering Lead

*Practice scenarios with Maria Chen, Data Engineering Lead at DataDrive Inc. (a mid-market SaaS company with 150 employees)*

---

## Prospect Profile

| Field | Value |
|-------|-------|
| **Name** | Maria Chen |
| **Title** | Data Engineering Lead |
| **Company** | DataDrive Inc. |
| **Industry** | B2B SaaS (Sales Enablement) |
| **Company Size** | 150 employees |
| **Team** | 3 data engineers, 2 analysts |
| **Current Stack** | Snowflake, dbt, Fivetran, Tableau |
| **Data Volume** | ~500GB, growing 20% YoY |
| **Trigger** | Signed up for free trial after DuckDB meetup |
| **Personality** | Technical, skeptical, evidence-driven, time-protective |

---

## Prospect Background

Maria has been at DataDrive for 2.5 years. She inherited a Snowflake setup from the previous lead and has optimized it significantly, but costs keep creeping up. She's frustrated that the sales team complains about slow dashboards while finance complains about Snowflake bills. She attended a local DuckDB meetup and was impressed, which led her to sign up for MotherDuck.

**Key Pain Points:**
- Snowflake costs $8K/month and climbing
- Analysts run expensive queries accidentally
- Wants to empower analysts without breaking the bank
- Tired of being the bottleneck for every data request

---

## Scenario 1: The Technical Opening

### Opening Exchange

**BDR**: "Hi Maria, this is [Name] from MotherDuck. I saw you signed up after the DuckDB meetup. How's it going?"

**MARIA**: *"Oh hey. Yeah, I've been playing around with it a bit. Still kicking the tires."*

**BDR**: "Nice. What have you been testing so far?"

**MARIA**: *"Mostly just loading some sample data and running queries. Wanted to see how it compares to what we have."*

---

**What Maria is thinking**: *"Let's see if this person actually knows the product or is just reading a script."*

**Recommended Follow-up**:
```
"How's the query performance been compared to your current setup?"
```

**MARIA**: *"Honestly? It felt a little slow on the free tier. I'm running the same queries I run in Snowflake and it's taking longer."*

---

## Scenario 2: The Performance Objection (Technical Deep-Dive)

### After Performance Concern

**BDR**: "That's not good at all. That's actually kind of surprising to me. What instance size are you on—pulse, standard, or jumbo?"

**MARIA**: *"I'm on the free trial, so whatever the default is. Pulse I think?"*

**BDR**: "Ah, that explains it. The pulse instance is our smallest—great for light exploration but not representative of production performance. What kind of queries are you running?"

**MARIA**: *"Aggregations mostly. We have about 500GB of event data. I'm doing GROUP BYs across 50 million rows."*

---

**What Maria is thinking**: *"If this thing can't handle 50 million rows, it's not going to work for us."*

**Recommended Response**:
```
"50 million rows with aggregations—that's exactly where instance
sizing matters. On pulse, you're memory-constrained, so it spills
to disk. A standard instance would handle that in-memory.

Here's the thing—it's not about paying more. It's about selecting
the right instance size for your workload. Would it help to have
one of our Solutions Architects look at your queries and recommend
the right configuration? They can run a benchmark with you."
```

**MARIA**: *"Yeah, that would actually be useful. I don't want to waste time if this isn't going to work for our scale."*

---

## Scenario 3: The Snowflake Comparison

### Discovery

**BDR**: "What are you using for your data warehouse today?"

**MARIA**: *"Snowflake. We've been on it for three years. It works, but the bills are getting out of control."*

**BDR**: "What's driving the cost increases?"

**MARIA**: *"Honestly? Our analysts. They write these massive queries without thinking about compute. And I can't really blame them—that's what Snowflake encourages. Just throw more compute at it."*

---

**What Maria is thinking**: *"I'm spending half my time optimizing queries and managing warehouse sizes instead of building things."*

**Recommended Response**:
```
"That's one of the core problems with Snowflake's model—it scales
through brute force. More compute, more cost.

MotherDuck is different. We optimize at the query engine level,
so you're not paying for inefficient execution. Plus, with hybrid
execution, your analysts can run iterative queries locally for
free, then hit the cloud only when they need to.

What would it mean for your team if analysts could explore data
without you worrying about runaway costs?"
```

**MARIA**: *"That would be huge. I'd actually get to work on the data platform instead of babysitting queries."*

---

## Scenario 4: The "Can It Handle Our Scale?" Objection

### Technical Qualification

**BDR**: "How much data are we talking about?"

**MARIA**: *"About 500GB right now. Growing maybe 20% a year. We also have some larger datasets—like 2TB of historical logs—but we don't query those often."*

**BDR**: "500GB with growth to maybe a terabyte over time—that's right in our sweet spot. What about query concurrency? How many people are hitting this at once?"

**MARIA**: *"Maybe 10-15 analysts running reports throughout the day. Plus some automated dbt jobs."*

---

**What Maria is thinking**: *"I need to know the limits before I invest time in this."*

**Recommended Response**:
```
"That's a great fit. We're optimized for exactly this—GB to low TB
scale, with moderate concurrency. You're not paying for petabyte
infrastructure you'll never use.

For the dbt jobs, we have native dbt integration. And for concurrency,
our serverless model means you're not managing warehouse sizes—
queries just run.

Would it help to see how a company with a similar profile is
using MotherDuck?"
```

**MARIA**: *"Yeah, a case study or architecture diagram would help. I need to see how this would actually fit into our stack."*

---

## Scenario 5: The Integration Concerns

### Stack Discussion

**BDR**: "What does your current data stack look like?"

**MARIA**: *"Fivetran for ingestion, dbt for transforms, Snowflake for storage and compute, Tableau for visualization. Pretty standard modern data stack."*

**BDR**: "That's a solid setup. How would you see MotherDuck fitting in?"

**MARIA**: *"That's my question. I don't want to rip and replace everything. Can I keep using dbt? What about Fivetran?"*

---

**What Maria is thinking**: *"I'm not rebuilding our entire pipeline for a new warehouse."*

**Recommended Response**:
```
"You wouldn't have to change anything about your workflow. MotherDuck
has native dbt integration—same models, same tests, just faster
execution. For Fivetran, we support direct loading.

Actually, a lot of teams run MotherDuck alongside Snowflake during
evaluation. You could point dbt at MotherDuck for one project,
compare the results, and migrate incrementally if it makes sense.

Would it help to have our Solutions Architect walk through the
integration architecture with you?"
```

**MARIA**: *"Yeah, I'd want to see that. Especially the dbt piece—that's the heart of our transforms."*

---

## Scenario 6: The Security & Compliance Deep-Dive

### Compliance Requirements

**BDR**: "Are there any specific requirements we should know about for your data infrastructure?"

**MARIA**: *"We're SOC 2 compliant and our security team is pretty strict. They'll want to review any new vendor. What certifications do you have?"*

---

**What Maria is thinking**: *"If security blocks this, I've wasted my time."*

**Recommended Response**:
```
"We're SOC 2 Type II certified—that's the gold standard. We can
share our full SOC 2 report with Business Plan customers.

We're also GDPR verified if you have EU data, and we offer HIPAA
BAAs for healthcare use cases.

Would it be helpful if I sent over our security documentation?
That way your security team can review it before we go further."
```

**MARIA**: *"Yeah, send that over. If they sign off, then we can talk seriously."*

**BDR**: "I'll send the SOC 2 overview and our security questionnaire responses today. Who on your security team should I copy?"

**MARIA**: *"James Wong—he's our security lead. I'll give him a heads up."*

---

## Scenario 7: The "I Need to Test This Properly" Stall

### Avoiding Commitment

**BDR**: "Would it make sense to set up a session with our Solutions Architect to help you run a proper benchmark?"

**MARIA**: *"I don't want to waste anyone's time. Let me do more testing on my own first. I'll reach out when I'm ready."*

---

**What Maria is thinking**: *"I've been burned by vendors before. I want to form my own opinion before getting into a sales cycle."*

**Recommended Response**:
```
"Totally respect that—you want to evaluate on your terms.

One thing that might help: our Solutions Architects aren't
salespeople. They're engineers who can help you set up a proper
benchmark—same queries, right instance size, apples-to-apples
comparison. It's not a pitch, it's a technical working session.

Would that be valuable, or do you prefer to solo it?"
```

**MARIA**: *"Hmm. If it's actually technical and not a demo, that could save me some time. I've been trying to figure out the right configuration on my own."*

**BDR**: "That's exactly what they do. They'll look at your query patterns and recommend the right setup. No slides, just SQL."

**MARIA**: *"Okay, let's do it. But I'm bringing questions."*

---

## Scenario 8: The DuckDB Comparison

### Technical Curiosity

**MARIA**: *"So I've been using DuckDB locally and it's great. What's the point of MotherDuck? Why not just use DuckDB?"*

---

**What Maria is thinking**: *"DuckDB is free and fast. Convince me why I need to pay for the cloud version."*

**Recommended Response**:
```
"DuckDB is amazing—it's the engine we're built on. If you're doing
solo analysis on your laptop, DuckDB is all you need.

MotherDuck adds the cloud layer: persistent storage, sharing data
across your team, collaboration, managed infrastructure. Think
of it as DuckDB for teams.

The hybrid execution is the key—you can run queries locally when
you're iterating, then seamlessly query cloud data when you need
the full dataset or want to share results. Same SQL, same experience."
```

**MARIA**: *"So my analysts could share datasets without me having to set up infrastructure?"*

**BDR**: "Exactly. You create a share, they query it. No S3 buckets to manage, no permissions to configure. Would that solve a problem for your team?"

**MARIA**: *"Actually yeah. Right now I'm the bottleneck for everything. Analysts ping me every time they need data access."*

---

## Scenario 9: The "My Manager Needs to Approve" Escalation

### Decision Process

**BDR**: "Who else would be involved in evaluating something like this?"

**MARIA**: *"I can evaluate the technical side, but anything with budget goes through Scott, our Head of Sales. He owns the P&L that includes data tools."*

---

**What Maria is thinking**: *"I can recommend, but I can't sign a check."*

**Recommended Response**:
```
"That makes sense. Would it help to set up a session where you
both attend? You can focus on the technical evaluation while
Scott sees the cost comparison.

That way you're not playing telephone between us."
```

**MARIA**: *"Yeah, that would be better. Scott doesn't understand the technical stuff, but he gets very interested when you mention cost savings."*

**BDR**: "Perfect. I actually spoke with Scott earlier—he mentioned the CFO has been on him about Snowflake costs. When could we get you both on a call?"

**MARIA**: *"Let me check his calendar... How about Thursday at 3pm?"*

---

## Scenario 10: The Feature Blocker

### Missing Capability

**BDR**: "Is there anything specific you'd need to see before moving forward?"

**MARIA**: *"Actually yeah—do you support window functions? And what about semi-structured data? We have a lot of JSON."*

---

**What Maria is thinking**: *"If it can't handle our actual workload, this is a non-starter."*

**Recommended Response**:
```
"Both, yes. Full window function support—RANK, ROW_NUMBER, LAG,
LEAD, all of it. And for JSON, we have native JSON type with
full path extraction. You can query JSON columns with standard
SQL, no special syntax.

Actually, the DuckDB engine is really strong on semi-structured
data. What's your JSON use case?"
```

**MARIA**: *"Event tracking data. Every event has a properties JSON blob that we need to parse."*

**BDR**: "That's a common pattern. You could do `properties->>'event_name'` directly in SQL. Want me to send you the JSON documentation?"

**MARIA**: *"Yeah, send that. If the JSON support is solid, that's one less concern."*

---

## Scenario 11: The Quick Disqualification (Petabyte Scale)

### Early Discovery

**BDR**: "How much data are we talking about for this use case?"

**MARIA**: *"Our main analytics warehouse is about 500GB, but we also have a data lake with 15 petabytes of raw logs. We're looking for something that can handle both."*

---

**What Maria is thinking**: *"We need a single solution for everything."*

**Recommended Response**:
```
"For the 500GB analytics layer, we're a great fit. For 15 petabytes
of raw logs, that's a different architecture—you'd want something
like Databricks or a dedicated lake solution.

A lot of companies use MotherDuck for the analytics layer on top
of a data lake. You'd query the curated data in MotherDuck and
leave the raw logs where they are.

Is the 500GB the primary use case, or are you looking for one
tool to rule them all?"
```

**MARIA**: *"Hmm, the analytics layer is definitely the priority. The raw logs are more for compliance—we rarely query them."*

**BDR**: "Then we should focus on the analytics use case. That's where we can add the most value. Want to dig into that?"

**MARIA**: *"Yeah, let's focus there."*

---

## Scenario 12: Successfully Booking the Technical Session

### The Close

**BDR**: "Based on what you've shared—500GB, dbt workflow, Snowflake cost concerns—it sounds like a proper benchmark would be the next step. Our Solutions Architect can help you set up an apples-to-apples comparison with your actual queries."

**MARIA**: *"Yeah, I think that makes sense. What does that look like?"*

---

**Recommended Response**:
```
"It's a 45-minute working session. You'd bring 3-4 representative
queries, they'll help you configure the right instance size, and
you'll run the benchmark together. They can also show you the dbt
integration.

You'll walk away with actual numbers you can compare to Snowflake.
No slides, no pitch—just SQL."
```

**MARIA**: *"Okay, that works. I've got a set of queries I use for benchmarking. When can we do this?"*

**BDR**: "How's next Tuesday or Wednesday? Our SA, [Name], is pretty flexible."

**MARIA**: *"Wednesday at 11am Pacific works. Send me a calendar invite."*

**BDR**: "Done. I'll include a link to our benchmark guide so you can prep your queries beforehand. Is maria.chen@datadrive.com the right email?"

**MARIA**: *"Yep. And send that dbt documentation too—I want to review that before the call."*

**BDR**: "Will do. Talk to you Wednesday."

---

## Maria's Personality Traits (for realistic role-play)

### How Maria Typically Responds

| Situation | Maria's Tendency |
|-----------|-----------------|
| **Cold open** | Guarded, assesses technical credibility |
| **Generic pitch** | Disengages, "just send me docs" |
| **Technical questions** | Engages deeply, asks follow-ups |
| **Vague claims** | Demands specifics, benchmarks, proof |
| **Commitment ask** | Wants to test first, brings manager for budget |
| **Vendor pressure** | Shuts down completely |

### What Motivates Maria

1. **Reducing operational burden** - Less time babysitting queries
2. **Empowering analysts** - Self-serve without breaking things
3. **Cost efficiency** - Proving value to leadership
4. **Technical elegance** - Clean architecture, modern tools
5. **Control** - Understanding exactly how things work

### What Makes Maria Disengage

1. **Salesy language** - "Paradigm shift", "game-changer", etc.
2. **Vague performance claims** - "It's really fast" without numbers
3. **Ignoring her questions** - She asked for a reason
4. **Rushing to demo** - She wants to understand first
5. **Not knowing the product** - She can tell immediately

### Technical Topics Maria Cares About

- Query performance (with specific benchmarks)
- Integration with existing tools (dbt, Fivetran, etc.)
- Data formats and schema support
- Concurrency and scaling behavior
- Security and compliance certifications
- Cost model and billing predictability

---

## Quick Reference: Maria vs. Scott

| Aspect | Maria (Data Engineer) | Scott (Head of Sales) |
|--------|----------------------|----------------------|
| **Primary concern** | Does it work? | Does it save money? |
| **Proof needed** | Benchmarks, technical docs | ROI, cost comparison |
| **Objection style** | Technical questions | Time/budget deflection |
| **Decision role** | Evaluator/recommender | Budget holder |
| **Meeting style** | Working session | Overview + numbers |
| **Follow-up** | Documentation, GitHub | One-pager, case studies |

---

## Debrief Questions

After each role-play, discuss:

1. **Credibility**: Did you establish technical credibility early?
2. **Listening**: Did you understand her actual problem before solutioning?
3. **Specificity**: Did you give concrete answers or vague claims?
4. **Patience**: Did you respect her need to evaluate independently?
5. **Value**: Did you position the SA session as valuable to her, not just a sales step?

---

*Role-play scenarios based on MotherDuck Cold Call Framework and patterns from technical evaluator calls.*

*Maria represents the technical champion you need to win over before the deal can progress.*
