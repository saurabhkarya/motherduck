# MotherDuck Calls Playbook

*Analysis and patterns derived from 155+ connected BDR calls*

---

## Table of Contents
1. [Master Discovery Framework](#master-discovery-framework) ← **START HERE**
2. [Successful Deal Patterns](#successful-deal-patterns)
3. [Common Disqualification Signals](#common-disqualification-signals)
4. [Objection Patterns from Call Notes](#objection-patterns-from-call-notes)
5. [Winning Talk Tracks](#winning-talk-tracks)
6. [Questions That Convert](#questions-that-convert)
7. [Call Notes Legend](#call-notes-legend)

---

## Master Discovery Framework

*Run a confident, professional conversation that uncovers: project, tech stack, data shape, pain, urgency, and evaluation plan.*

**Our brand gives us the opportunity to get more out of calling than most. Run with it.**

---

### The 5 Questions (Hit These Every Call)

```
1. What are you working on?
2. What are you using now?
3. Why is it not working?
4. What happens if it doesn't get fixed?
5. Why are you exploring MotherDuck?
```

| Question | What You're Getting | If They Can't Answer |
|----------|---------------------|----------------------|
| **What are you working on?** | Project context | Probe: "Any analytics, dashboards, reporting?" |
| **What are you using now?** | Tech stack | Probe: "Postgres? Snowflake? Spreadsheets?" |
| **Why is it not working?** | Level 1 Pain | Probe: "Cost? Speed? Complexity?" |
| **What happens if it doesn't get fixed?** | Level 2 Pain (stakes) | Probe: "Who feels this? What's blocked?" |
| **Why are you exploring MotherDuck?** | Motivation + urgency | Confirms pain, reveals trigger |

**This is your checklist. If you haven't asked all 5, you're not done with discovery.**

---

### 1. How to Open the Call

**Tone:** Warm, relaxed, curious.

**Inbound:**
```
"Hey [Name], this is [Your name] from MotherDuck. Noticed you
signed up / kicked off a trial — figured I'd call to hear what
you're working on and see if I can point you in the right direction."
```

**Outbound:**
```
"Hey [Name], [Your name] from MotherDuck. I've been seeing a lot
of teams like yours rethinking how they handle analytics. Wanted
to learn what you're working on and see if we're relevant at all."
```

**Goal:** Get them to talk. You're just trying to get the lay of the land.

---

### 2. First Level Discovery

**Keep it simple. Be curious, not interrogative.**

**Core "Daylight" Questions:**
```
"What are you working on right now with data?"

"What kinds of datasets are you working with?"

"Do you have a dashboard, report, or application in mind?"

"What does your tech stack look like today?"
(Postgres? S3? dbt? Snowflake?)

"What tools are your team using around it?"
(BI, ingestion, orchestration)
```

**Goal:** Understand context, not solve the problem.

**Listen for project type:**
- Internal analytics
- Customer-facing analytics
- ETL/transformations

**Pivot when needed:** "Got it, let me take one step back to get fuller context: _________?"

---

### 3. Level 1 Pain: What is the need?

*Try to pinpoint the initial surface-level problem before going deeper.*

**Questions:**
```
"What brings you to MotherDuck today?"

"What isn't working the way you want?"

[If using Postgres/other DB]
"What is it that Postgres isn't able to do well today
that is important to you/the business?"

"Is there a specific query or answer to a question that you need?"

"Is it cost, speed, complexity, or just feeling like your
current setup is overkill? Maybe I'm missing something."
```

**If unclear:** Repeat back: "So it sounds like ___ happens today, and that slows down ____. Do I have that right?"

**Listen for:**
| Pain Signal | What It Means |
|-------------|---------------|
| Slow queries | Performance issue |
| Expensive warehouses | Cost pain |
| Complexity / maintenance | Ops burden |
| Analyst frustration | UX pain |
| Scaling issues | Growth problem |
| Customer-facing latency | Product pain |
| Concurrency/noisy neighbor | Architecture issue |

---

### 4. Level 2 Pain: Why does it matter?

*Not all problems are worth solving. Push past the surface to determine if it's worth solving.*

**Questions:**
```
"Why does this matter right now?"

"What happens if this doesn't get solved in the next 6–12 months?"

"You mentioned xyz is important — why is that a priority for you?"

"Who feels this pain day-to-day?"
```

**If cost comes up:**
```
"Typically if MotherDuck is solving a core problem like xyz,
folks are comfortable investing in solving the problem, so
what makes cost a key factor for you?

Is there a budget or certain amount you have set for this?

Happy to set up time to go through pricing, and/or walk
through how we may scope that for you."
```

**Your job:** Uncover urgency + stakes, organically through the problem they put forward.

---

### 5. MotherDuck Positioning

**Aim for clear, simple, and exciting explanation.**

**Core Positioning:**
```
"MotherDuck takes a fundamentally different approach from
traditional data warehouses, which we've found introduces
a lot of infrastructure overhead and complexity for most teams.

MotherDuck is designed to take advantage of what's possible
with DuckDB and single machines today. Instead of running
large distributed warehouses to do everything in one place,
each user gets their own isolated compute instance.

MotherDuck is serverless, with sub-100 millisecond cold starts
and instances designed for different workloads (ingest,
transformation, analytics, etc.).

For 99% of analytical workloads, MotherDuck is faster,
far less expensive, and way easier to manage."
```

**Add color by persona:**

| Persona | What to Emphasize |
|---------|-------------------|
| **Analyst** | "You get crazy-fast queries and no one can step on your toes." |
| **Engineer** | "You get isolation and zero warehouse babysitting." |
| **Product** | "Perfect for customer-facing dashboards — sub-second, predictable." |
| **CTO** | "Simpler architecture, lower TCO, cleaner concurrency model." |

**Stop there. Let them react.**

---

### 6. Common Objections (During Discovery)

**If they want a feature comparison:**
```
"Totally. Before we go there, can I get a little more context
so I don't take you somewhere irrelevant?"
```

**If Snowflake/BigQuery is "working fine":**
```
"Honestly, if your workload is truly huge and distributed,
they might be right. But most teams aren't querying petabytes.
You may store a lot of data, or have a few large batch jobs.
But typically teams don't work day-to-day with the volume
necessary to justify a traditional warehouse.

We often work with Snowflake or others, managing the serving
/ gold layer or supporting external-facing applications.
That's where our multi-tenancy, serverless model can make
a big difference — with improved performance."
```

**If they ask about pricing:**
```
"Sure, structurally: There's a $100/mo platform fee, $0.08/GB
storage. Serverless means you pay for seconds of compute,
not data volume.

Most teams see ~40% lower cost compared to distributed warehouses."
```

**If they say they're early:**
```
"No problem. We typically partner with teams early and help
get architecture right. Are there other areas you're working
on first?

I know you mentioned xyz is a focus…"
```

**Maintain calm confidence. Not pushy.**

---

### 7. Book the Meeting

**Be assumptive.**

**Simple close:**
```
"Let's find some time to dig in a bit and loop in our team.
How's [specific day/time]?"
```

**If they say no:**
```
"No worries, what's the right next step so I don't waste
your time? I can put a placeholder down for us."
```

---

### Discovery Call Flow Summary

```
1. OPEN (30 sec)
   → Warm, trigger-based opening
   → Goal: Get them talking
        ↓
2. FIRST LEVEL DISCOVERY (2-3 min)
   → Project, tech stack, datasets
   → Goal: Understand context
        ↓
3. LEVEL 1 PAIN (1-2 min)
   → What isn't working?
   → Goal: Surface-level problem
        ↓
4. LEVEL 2 PAIN (1-2 min)
   → Why does it matter?
   → Goal: Urgency + stakes
        ↓
5. POSITION (1 min)
   → Tailored by persona
   → Goal: Let them react
        ↓
6. HANDLE OBJECTIONS
   → Stay curious, not defensive
        ↓
7. BOOK MEETING
   → Assumptive close
```

---

## Successful Deal Patterns

### Deals Won (from Connected Calls analysis)

| Contact | Company | Deal | Key Success Factor |
|---------|---------|------|-------------------|
| Ally Mauldin | MarketDial | MarketDial - Ramping | Performance objection → SA meeting to optimize |
| Guy Caprioli | BlueSky Solutions | BlueSky Solutions - New Deal | 200GB, 5 facilities, decision maker |
| Vivek Ganta | Algoseven | Algoseven - New Deal | Multiple touchpoints, call confirmed |

### What Successful Deals Have in Common

**1. Real Business Use Case**
- Production data from business operations
- Multiple data sources/facilities
- Clear analytics needs

**2. Right-Sized Data**
- Sweet spot: 200GB - 2TB
- Text-based/transactional data
- Not petabyte scale

**3. Decision Maker Access**
- "I run the business" (Guy Caprioli)
- Can relay feedback to decision makers (Ally Mauldin)
- Multi-threading planned

**4. Pain Point Identified**
- Cost concerns with current solution
- Performance issues
- Complexity of existing stack

**5. AI/Natural Language Interest**
- Small team needs non-SQL users to query data
- Using AI tools (Claude, Cursor, Copilot) already
- Want to democratize data access

---

## Common Disqualification Signals

### From Call Notes Analysis

| Call Note | Signal Type | Action |
|-----------|-------------|--------|
| "personal project" | Not business use | Politely DQ, offer community |
| "student" | Not qualified | DQ, offer free tier |
| "teacher" | Not qualified | DQ, offer educational resources |
| "too small!" | Below threshold | Free tier, nurture |
| "volume too low" | Below threshold | Free tier, check back later |
| "wrong contact @ company" | Wrong person | Get referral |
| "not a real company" | Not qualified | DQ |
| "really not interested" | Not interested | DQ, nurture |
| "signed up purely to learn" | Not business use | DQ, offer docs |
| "opted out" | Declined | Remove from sequence |

### DQ Questions to Ask Early

```
"Is this for a company use case or personal exploration?"
"Do you work in data now?"
"Who would be using this at your organization?"
"What's the business problem you're trying to solve?"
```

### Call Duration Insights

- **Successful meetings**: 7-10 minutes average
- **Disqualified calls**: Should be <5 minutes if DQ early
- **"YAPPER" calls** (21+ min): Too long for non-qualified prospects

---

## Objection Patterns from Call Notes

### Competitor Objections

| Call Note | Objection | Recommended Response |
|-----------|-----------|---------------------|
| "Using and enjoying Snowflak..." | Happy with competitor | Ask about cost/complexity pain |
| "warehousing data from their..." | Evaluating alternatives | Highlight fit for their data size |

### Size/Fit Objections

| Call Note | Objection | Recommended Response |
|-----------|-----------|---------------------|
| "too small!" | Company too small | "That's who we're built for - serverless, no minimums" |
| "volume too low" | Data too small | "Free tier covers this - no need to pay for unused capacity" |
| "use case only 2 GB and mont..." | Very small use case | Free tier, nurture for growth |

### Timing Objections

| Call Note | Objection | Recommended Response |
|-----------|-----------|---------------------|
| "way too sleepy" | Bad timing/energy | Offer to callback at better time |

---

## Winning Talk Tracks

### From Ally Mauldin Call (Deal Won)

**Opening (Trigger-based)**
```
"Hey [Name]. It's [Your name] at MotherDuck. I saw that you
signed up. How's it going?"

[Wait for response]

"What have you been working on?"
```

**Handling Performance Objection**
```
PROSPECT: "It's been slower than BigQuery"

YOU: "Oh, really? That's not good at all."

[Show genuine concern - NOT defensive]

YOU: "That's actually kind of surprising to me. What kind of
instance size are you using? A pulse, standard, jumbo?"

[If on free/light plan]

YOU: "Ah, that makes sense. The light plan has limitations.
It's not about buying more features—it's about selecting the
right instance size, which I hope is an easier ask than
'put your credit card in and buy more stuff.'

Would it make sense to have one of our Solutions Architects
help you optimize the configuration?"
```

### From Guy Caprioli Call (Deal Won)

**Converting "Side Project" to Business Opportunity**
```
PROSPECT: "Just a small little side project to get familiar"

YOU: "Oh nice. Any chance there are use cases or projects at
work where MotherDuck may come in handy?"
```

**Offering SA Session**
```
"We do offer sessions with our Solutions Architect to kind of
help you get up and running faster, get better experience with
the product overall."
```

**Getting Sizing Info**
```
"If you wouldn't mind, last question—do you know what your
data volume is like?"

[After they answer]

"Sweet spot with room to grow. That's great."
```

---

## AI Feature Talk Tracks

### When Prospect Mentions Small Team / No SQL Expertise

```
PROSPECT: "It's just me / we don't have a dedicated data person"

YOU: "That's actually perfect for MotherDuck. We have something
called PROMPT QUERY—you literally type a question in plain
English like 'What were my top 10 customers last month?' and
it writes the SQL for you. So you don't need SQL experts on
the team to get answers."
```

### When Prospect Uses AI Tools (Claude, Cursor, etc.)

```
PROSPECT: "We're using Claude / Cursor / AI for coding..."

YOU: "Oh nice—we actually have an MCP server that connects
those tools directly to your database. So you could ask Claude
questions about your data and it can query MotherDuck directly.
Pretty cool for AI-first workflows."
```

### When Prospect Frustrated with SQL Complexity

```
PROSPECT: "SQL is always breaking / syntax errors..."

YOU: "Totally get that. We have an AI FixIt feature that
auto-corrects SQL errors. So if you make a typo or syntax
mistake, it just fixes it for you. No more debugging missing
commas."
```

### MCP Server Pitch (for Technical Prospects)

```
"One thing that's pretty unique—we launched an MCP server
last year. It's Model Context Protocol, basically lets AI
assistants like Claude or Cursor connect directly to your
MotherDuck database. So your devs can ask questions in
natural language and the AI queries the data. Really popular
with AI-first teams."
```

### DuckDB-NSQL Differentiator

```
"Unlike generic AI that struggles with SQL dialects, we
actually built our own text-to-SQL model called DuckDB-NSQL.
It's specifically trained on DuckDB syntax, so it handles
our SQL features correctly. It's open source on Ollama if
you want to run it locally too."
```

---

## Questions That Convert

### Discovery Questions (in order)

1. **Trigger Question**
   ```
   "I saw you signed up / downloaded [X]. What have you been working on?"
   ```

2. **Business Context**
   ```
   "Is this for work or a personal project?"
   "Any chance there are use cases at work where MotherDuck may come in handy?"
   ```

3. **Current State**
   ```
   "What are you using for your data warehouse today?"
   "How's that working for you? Any frustrations?"
   ```

4. **Pain/Motivation**
   ```
   "Was it more for performance or cost that you're evaluating alternatives?"
   "What would need to change for this to become a priority?"
   ```

5. **Sizing/Qualification**
   ```
   "Do you know what your data volume is like?"
   "How many people would be querying this?"
   "Who else would be involved in evaluating something like this?"
   ```

6. **AI/Natural Language Needs** (new qualification angle)
   ```
   "Do you have non-technical people who need access to data?"
   "Are you using AI tools like Claude or Cursor for development?"
   "How SQL-savvy is your team?"
   ```

### Hesitation Detection Question

From Ally Mauldin call - picking up on uncertainty:
```
"You tempered that with 'he said'... I think you're not
convinced yet?"
```

This opened up the real objection (performance concerns).

---

## Call Notes Legend

### Success Indicators
- `YESSS FIRST ONE EYAEAA!!!` - First deal closed, excitement
- `YAPPER!!!` - Long conversation (may or may not be qualified)
- `call confirmed` - Meeting successfully booked

### Qualification Notes
- `[X]GB` - Data volume noted
- `[N] facilities` - Scale indicator
- Tech stack notes (cloudflare, caspio, etc.)

### Disqualification Notes
- `personal project` - Not business use
- `student` / `teacher` - Educational use
- `too small!` - Below threshold
- `wrong contact @ company` - Need referral
- `not a real company` - DQ

### Objection Notes
- `Using and enjoying [Competitor]` - Competitor objection
- `volume too low` - Size objection

---

## Call Categorization Summary

Based on analysis of 155 connected calls:

### By Outcome
- **Deals Created**: ~3-5 (MarketDial, BlueSky, Algoseven)
- **Meetings Booked**: ~10-15%
- **Disqualified**: ~40-50% (personal projects, students, wrong contact)
- **Nurture/Follow-up**: ~30-40%

### Common DQ Reasons (from call notes)
1. Personal project / hobby
2. Student / educational
3. Too small / volume too low
4. Wrong contact at company
5. Not interested / opted out

### Successful Pattern
1. Trigger-based opening (signed up, downloaded ebook)
2. Discovery about what they're building
3. Pivot to business use case
4. Uncover pain point or need
5. Offer SA session as value
6. Book specific time
7. Confirm email/invite sent

---

## BDR Best Practices from Calls

### DO
- ✅ Use trigger-based openings
- ✅ Ask about business use cases even if they mention personal projects
- ✅ Show genuine concern when they report issues (not defensive)
- ✅ Diagnose technical issues (instance size, plan type)
- ✅ Offer SA sessions as VALUE, not sales pitch
- ✅ Get sizing info before ending call
- ✅ Confirm meeting invite was received
- ✅ Mention PROMPT QUERY for small teams / non-SQL users
- ✅ Ask about AI tool usage (Claude, Cursor) to pitch MCP server

### DON'T
- ❌ Stay on 20+ minute calls with unqualified prospects
- ❌ Get defensive about performance issues
- ❌ Skip qualification questions
- ❌ Assume "side project" means no business opportunity
- ❌ Let calls end without next steps

---

## Transcripts Available

Full transcripts extracted and saved:

| # | Contact | Company | Outcome | Key Learning |
|---|---------|---------|---------|--------------|
| 001 | Ally Mauldin | MarketDial | **DEAL** | Performance objection → SA meeting |
| 002 | George Cosio | Splunk | DQ (YAPPER) | Personal project, 21+ min call |
| 003 | Guy Caprioli | BlueSky | **DEAL** | Side project → business pivot |
| 004 | Sia Talebi | Kappa Bar | DQ | Wrong contact |
| 005 | Rohit Verma | Netlink Software | DQ | Too sleepy/bad timing |
| 006 | Vinny Costa | Locklear | DQ | Volume too low, side project |
| 007 | Rajat Chelani | Claritas Rx | DQ | Using Snowflake (competitor) |
| 008 | Christopher Mohs | Smart Healthy Green Living | DQ | Too small (2 employees) |
| 009 | Maximilian Schön | Solar Institute | DQ | Too small (800K rows, DuckDB user) |
| 010 | Joel MacPherson | Uproot Clean | **NURTURE** | Will try with new client |

*10/155 transcripts extracted. Additional transcripts being processed...*

---

---

## Related Quick Reference Guides

- [Cheat Sheet](../QUICK_REFERENCE/01_Cheat_Sheet.md) - Pitch, differentiators, personas
- [Objection Responses](../QUICK_REFERENCE/02_Objection_Responses.md) - Quick objection handling
- [Discovery Questions](../QUICK_REFERENCE/03_Discovery_Questions.md) - Question flow
- [Pricing Guide](../QUICK_REFERENCE/04_Pricing_Quick_Guide.md) - Pricing reference
- [AI/MCP Guide](../QUICK_REFERENCE/05_AI_MCP_Guide.md) - AI feature talk tracks

---

*Playbook compiled from MotherDuck BDR call analysis*
*Last updated: February 2026*
