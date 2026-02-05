# MotherDuck Cold Call Framework

*A comprehensive framework for handling all objections, common questions, and conversation pivots with the goal of booking meetings with AEs and CEs.*

---

## Table of Contents
1. [Call Structure Overview](#call-structure-overview)
2. [Opening Framework](#opening-framework)
3. [Discovery Questions](#discovery-questions)
4. [Objection Handling Matrix](#objection-handling-matrix)
5. [Conversation Pivots](#conversation-pivots)
6. [The Meeting Ask](#the-meeting-ask)
7. [Disqualification Triggers](#disqualification-triggers)
8. [Common Questions & Responses](#common-questions--responses)
9. [Call Notes Cheat Sheet](#call-notes-cheat-sheet)

---

## Call Structure Overview

### The Winning Call Formula (from successful deals)

```
OPENING (0-30 sec)     → Pattern interrupt + permission
DISCOVERY (30-3 min)   → Understand their situation
OBJECTION (3-5 min)    → Acknowledge, diagnose, reframe
PIVOT (5-7 min)        → Turn problem into opportunity
ASK (7-8 min)          → Book the meeting with SA/AE
```

### Key Metrics from Successful Calls
- **Talk ratio**: Aim for 40-50% you / 50-60% them
- **Call duration**: 7-10 minutes for successful meetings
- **Questions asked**: 3-5 discovery questions before pivot

---

## Opening Framework

### The Trigger-Based Open (Highest Success Rate)

```
"Hi [Name], this is [Your Name] from MotherDuck.

I saw you [signed up / downloaded our ebook / etc].
How's it going?"

[Wait for response]

"What have you been working on?"
```

**Why it works**: References a real action they took, opens conversation naturally.

### The Direct Value Open

```
"Hi [Name], this is [Your Name] from MotherDuck.

We help data teams analyze data faster and cheaper than
Snowflake—about 70% cheaper actually.

Is that something worth a quick conversation?"
```

### The Pattern Interrupt Open

```
"Hi [Name], this is [Your Name] from MotherDuck.
Did I catch you at an okay time?"

[Wait - they usually say yes or ask what it's about]

"Great. I'll be quick—I'm not sure we're a fit, but I noticed
[Company] is [growing/hiring data engineers/etc], and wanted
to see if your data infrastructure is keeping up with that growth?"
```

### Opening Responses

| They Say | You Say |
|----------|---------|
| "Who is this?" | "This is [Name] from MotherDuck—the serverless data warehouse built on DuckDB. I noticed you [trigger]..." |
| "I'm busy" | "Totally understand. When's a better time for a quick 5-minute call? I'm flexible." |
| "What's this about?" | "We help data teams analyze data faster and cheaper than Snowflake. Companies like yours use us when [pain point]. Does that sound relevant?" |
| "How'd you get my number?" | "We saw you [signed up/downloaded/etc] and wanted to check in. Is now an okay time?" |

---

## Discovery Questions

### The Discovery Sequence (use in order)

**1. Situation Question**
```
"What are you using for your data warehouse today?"
```

**2. Pain Question**
```
"And how's that working for you? Any frustrations?"
```

**3. Impact Question**
```
"What would it mean for your team if you could [solve that pain]?"
```

**4. Decision Question**
```
"Who else would be involved in evaluating something like this?"
```

### Deep Discovery Questions (for engaged prospects)

**On Current Stack:**
- "Was it more for performance or cost that you're evaluating alternatives?"
- "What analytics queries are you running against it?"
- "How's the performance when you need to aggregate?"

**On Use Case:**
- "What use cases are you running on it? And how's it going?"
- "Are you doing mostly ML/AI, or is it more analytics and BI use cases?"
- "What would you need to test to feel confident in switching?"

**On Decision Process:**
- "Who made the decision to use [current solution]?"
- "What would need to change for this to become a priority?"
- "When does your current contract come up for renewal?"

**Sizing Questions (for AE handoff):**
- "How much data are we talking about?" (GB/TB)
- "How many people would be querying this?"
- "What's your freshness requirement—real-time or batch okay?"

---

## Objection Handling Matrix

### Framework: Acknowledge → Diagnose → Reframe

Never argue. Stay curious. Ask questions to understand the real concern.

---

### Competitor Objections

#### "We already use Snowflake"

**Real Concern**: Switching costs, existing investment

**Response Flow**:
```
YOU: "Snowflake is solid—a lot of our customers came from Snowflake actually."

[Pause]

YOU: "Mind if I ask—how's it working for you? Any concerns around
cost or complexity?"

[If they mention cost/performance issues]

YOU: "That's actually the main reason companies switch. Our customers
typically see 70% cost savings because you only pay when queries run—
no idle costs. Would it make sense to have one of our Solutions
Architects show you a comparison?"
```

**Key Insight from Successful Calls**:
> "Snowflake scales through brute force—adding more compute. This leads to over-provisioning and higher costs. MotherDuck optimizes at the core, so queries run faster without unnecessary scaling."

---

#### "We're looking at Databricks"

**Real Concern**: Think they need a lakehouse or ML capabilities

**Response Flow**:
```
YOU: "Databricks is great for heavy ML workloads."

[Pause]

YOU: "Are you doing mostly ML/AI, or is it more analytics and BI use cases?"

[If analytics-focused]

YOU: "For analytics, MotherDuck is actually simpler and more cost-effective.
Databricks adds complexity if you don't need the ML capabilities. Many
teams use MotherDuck for analytics alongside their ML platform."
```

---

#### "BigQuery is already included with GCP"

**Real Concern**: Perceived sunk cost, integration convenience

**Response Flow**:
```
YOU: "GCP integration is convenient."

[Pause]

YOU: "How's the BigQuery experience been? Any concerns around cost or
query speed?"

[If any hesitation]

YOU: "MotherDuck actually benchmarks 4x faster than BigQuery. And our
hybrid execution means you can use local compute for iterative work—
which BigQuery can't do. The cost savings often exceed any 'bundled'
benefit. Want to see the benchmarks?"
```

---

### Performance Objections

#### "It's slower than [Competitor]" (The Ally Mauldin Play)

**This is a BUYING SIGNAL** - they've actually tried it!

**Response Flow**:
```
YOU: "Oh, really? It's been slower? That's not good at all."

[Show genuine concern, not defensiveness]

YOU: "That's actually kind of surprising to me. What kind of instance
size are you using? A pulse, standard, jumbo?"

[If they're on free/lite plan]

YOU: "Ah, that makes sense. The light plan has limitations—using the
smallest instance can sometimes cost MORE due to inefficiencies.

It's not about buying more features—it's about selecting the right
instance size, which I hope is an easier ask than 'put your credit
card in and buy more stuff.'

Would it make sense to have one of our Solutions Architects help
you optimize the configuration?"
```

**Key Reframe**: It's not "upgrade and pay more" → it's "select the right instance size"

---

### Budget & Priority Objections

#### "We don't have budget"

**Response Flow**:
```
YOU: "Understood—budgets are tight everywhere."

[Pause]

YOU: "Is data infrastructure on your roadmap at all, or is this a
'not right now' situation?"

[If on roadmap]

YOU: "Our free tier gives you 10GB and 10 compute hours—enough to
test and build a business case. Want me to send you the link?"

[If not on roadmap]

YOU: "No problem. When do you think this might become a priority?
I can check back then."
```

---

#### "We're too small"

**Response Flow**:
```
YOU: "Actually, that's who we're built for. MotherDuck is serverless—
no infrastructure to manage. No minimum spend. You pay for what you use."

[Pause]

YOU: "What are you using for data today?"
```

**Size Sweet Spot**: MotherDuck is ideal for GB to low TB scale ("medium data"). If they say petabytes, that's a disqualification.

---

#### "It's too expensive"

**Response Flow**:
```
YOU: "Cost is important—no one wants to overpay."

[Pause]

YOU: "What are you comparing it to? And what's driving that perception?"

[Listen]

YOU: "Compared to Snowflake or Databricks, we're typically 70% cheaper.
The Business plan is $100/month plus usage—most startups spend $50-200/month
total. Is there a specific budget range you're working with?"
```

---

### Timing & Process Objections

#### "Check back next quarter"

**Response Flow**:
```
YOU: "Happy to do that."

[Pause]

YOU: "What's changing next quarter that would make this more relevant?"

[If real reason]

YOU: "Perfect, I'll reach out in [month]. Anything I can send in the
meantime to help you evaluate?"

[If vague]

YOU: "Just so I'm prepared—what would you want to discuss when we reconnect?"
```

---

#### "We just signed a contract with [Competitor]"

**Response Flow**:
```
YOU: "Understood—contracts are commitments."

[Pause]

YOU: "When does that come up for renewal?"

[Get the date]

YOU: "Would it be helpful to reconnect a few months before then? That
way you have options when the time comes. I can put a reminder on my
calendar."
```

---

#### "Send me some information"

**This is often a brush-off. Convert it to engagement.**

**Response Flow**:
```
YOU: "Absolutely, happy to send info."

[Pause]

YOU: "What specifically would be most helpful? Pricing? Technical docs?
Customer stories?"

[After they answer]

YOU: "I'll send that over. Would it make sense to schedule a quick call
to walk through it together? Sometimes that's faster than reading docs."
```

---

### Trust & Knowledge Objections

#### "I've never heard of MotherDuck"

**Response Flow**:
```
YOU: "We're newer than Snowflake, for sure."

[Pause]

YOU: "MotherDuck was founded by the team behind Google BigQuery, with
leaders from Snowflake and Databricks. We're backed by a16z, Redpoint,
and other top investors.

But the best proof is trying it—our free tier lets you evaluate risk-free.
Would that be worth exploring?"
```

---

#### "Is it production-ready?"

**Response Flow**:
```
YOU: "Fair question—you want to know you can rely on it."

[Pause]

YOU: "What does 'production-ready' mean for you? Uptime? Compliance? Scale?"

[Listen]

YOU: "We're SOC 2 Type II compliant, have HIPAA BAAs available, and
companies like [examples] run production workloads on us. What specific
concerns can I address?"
```

---

### Security & Compliance Objections

#### "What security certifications do you have?"

```
"Great question. MotherDuck is SOC 2 Type II certified—that's the gold
standard for cloud service security. We're also GDPR verified and offer
HIPAA BAAs for healthcare customers.

For Business Plan customers, we can share our full SOC 2 report and
support your security questionnaire. Would that be helpful?"
```

#### "We need HIPAA compliance"

```
"We support HIPAA through Business Associate Agreements for Business
Plan customers. That's $100/month platform fee plus usage—very reasonable
for HIPAA-compliant infrastructure.

Should I connect you with our security team to discuss the BAA process?"
```

#### "We have EU customers / need GDPR"

```
"MotherDuck is GDPR verified. We have an EU data region in Frankfurt,
so your EU data stays in Europe. We also provide Data Processing Agreements.

Want me to send over our DPA for your legal team to review?"
```

---

## Conversation Pivots

### The Problem → Solution Architect Pivot

When they share a problem, pivot to the SA meeting:

```
"That's exactly what our Solutions Architects help with. They can
[diagnose the issue / show you the right configuration / walk through
a comparison].

Do you have time next week for a quick session?"
```

### The "Not the Decision Maker" Pivot

When they say they're not the decision maker:

```
"No problem at all. Would it make sense to set up a call with you AND
[decision maker]? That way you can both evaluate together and I'm not
asking you to relay everything."
```

### The Technical Curiosity Pivot

When they're technical and interested but not ready:

```
"It sounds like you're in exploration mode, which is great. Our Solutions
Architects love working with technical folks early—they can show you
under the hood and answer the deep questions.

Would that be valuable?"
```

### The Competitive Evaluation Pivot

When they're comparing vendors:

```
"That makes sense to do your due diligence. Who else are you looking at?"

[Listen]

"We're often compared to [competitors]. Want me to send our comparison
guides? That might speed up your evaluation. Better yet, we could do a
quick call to walk through the differences—save you some research time."
```

---

## The Meeting Ask

### Framing the Ask (from successful calls)

**DON'T SAY**: "Would you like to schedule a demo?"

**DO SAY**:
```
"Would it make sense to have one of our Solutions Architects
[help you optimize / show you a comparison / walk through the setup]?

They're technical—not salesy—and can answer the deep questions."
```

### The Soft Ask

```
"I could send over a tentative invite and you can see if there's
interest—we could circle back if needed."
```

### The Direct Ask

```
"Do you think you guys have time early next week to talk to one
of our Solutions Architects?"
```

### The Value-First Ask

```
"It's not about buying more features—it's about [solving X problem].
Our Solutions Architects can help figure out the right approach.

Would that be worth 30 minutes?"
```

### Scheduling Tips

- **Suggest specific days**: "How's Tuesday or Wednesday look?"
- **Offer to include others**: "Should we include [the decision maker / your team]?"
- **Confirm timezone**: "Are you on Pacific time?"
- **Send calendar invite immediately**: Don't let it slip

---

## Disqualification Triggers

### Immediate Disqualification (Note in HubSpot)

| Signal | Call Note | Action |
|--------|-----------|--------|
| Personal project | "personal project" | Politely exit, offer docs |
| Student/teacher | "student" or "teacher" | Politely exit, offer community |
| No real company | "not a real company" | Exit |
| Wrong contact | "wrong contact @ company" | Ask for referral |
| Data too big (PB scale) | "too large - petabytes" | May need enterprise, or different solution |

### Soft Disqualification (Nurture)

| Signal | Call Note | Action |
|--------|-----------|--------|
| Volume too low | "volume too low" | Free tier, check back later |
| Too small (company) | "too small" | Self-serve, community Slack |
| No urgency | "exploring only" | Nurture sequence |
| Feature blocked | "feature blocked: [X]" | Add to HubSpot, notify product |

### Qualification Criteria (from AE/CE team)

**Logo-level ($500/mo+ potential)** = Worth dedicated AE/CE time
- Real production use case
- Multiple users/applications
- Clear pain point ("Level 2 Pain")

**Growth Account** = Self-serve with light touch
- Small/experimental workload
- Single user
- Exploratory only

---

## Common Questions & Responses

### Technical Questions

| Question | Response |
|----------|----------|
| "How is MotherDuck different from DuckDB?" | "DuckDB is the open-source engine we're built on. MotherDuck adds the cloud layer—persistence, sharing, collaboration, and managed infrastructure. Think of it as DuckDB + cloud superpowers." |
| "Can it handle real-time data?" | "We're optimized for analytics on batch data. If you need sub-second latency for streaming, that's not our sweet spot. But for hourly/daily analytics with fast queries, we're ideal." |
| "What's hybrid/dual execution?" | "You can run queries locally on your laptop for free during development, then seamlessly query cloud data when needed. Same SQL, same experience—but you only pay for cloud compute when you use it." |
| "What file formats do you support?" | "Parquet, CSV, JSON, and we can query directly from S3, GCS, or Azure. You don't have to move your data—we read it where it lives." |
| "How does pricing work?" | "Pay-per-query with no idle costs. Free tier has 10GB storage and 10 compute hours. Business plan is $100/month plus usage—most customers spend $50-200/month total." |

### Business Questions

| Question | Response |
|----------|----------|
| "Who else uses MotherDuck?" | "Companies like [relevant examples] for [relevant use cases]. We're particularly popular with data teams at startups and mid-market companies." |
| "How long have you been around?" | "Founded by the team behind Google BigQuery in 2022, GA since [date], backed by a16z and Redpoint. We're newer than Snowflake but built by folks who helped create it." |
| "What if we outgrow you?" | "Our sweet spot is GB to low TB scale. If you grow to petabytes, we'll help you plan that transition. But most companies never hit that—we scale well within the 'medium data' range." |

---

## Call Notes Cheat Sheet

### Quick Notes to Log in HubSpot

**Successful Signals:**
- `MEETING BOOKED: [date] with [SA/AE name]`
- `interested - evaluating [use case]`
- `production timeline: [date]`
- `decision maker: [name/title]`

**Objection Tracking:**
- `obj: using Snowflake - happy`
- `obj: using Snowflake - cost concerns`
- `obj: no budget until Q2`
- `obj: need HIPAA`
- `obj: performance concerns on light plan`

**Disqualification:**
- `DQ: personal project`
- `DQ: student`
- `DQ: too small - free tier`
- `DQ: wrong contact - referred to [name]`
- `DQ: petabyte scale`

**Follow-up:**
- `callback: [date] - [reason]`
- `send: comparison doc`
- `send: pricing info`
- `nurture: exploring only`

---

## Key Quotes to Remember

> "People like us, they want to help us, they want to be part of our story."
— Use when asking for the meeting

> "We don't profit from inefficient compute, so our incentives are aligned with helping you do more with less."
— Use when discussing pricing vs. competitors

> "That's not good at all. That's actually kind of surprising to me."
— Use when acknowledging performance concerns (not defensive)

> "It's not about buying more features—it's about selecting the right instance size."
— Use when pivoting performance objections to SA meeting

---

## Quick Reference Card

### Call Flow
1. **Open**: Trigger-based or direct value
2. **Discover**: Situation → Pain → Impact → Decision
3. **Handle**: Acknowledge → Diagnose → Reframe
4. **Pivot**: Problem → SA/AE can help
5. **Ask**: Specific day/time, include decision maker

### Top 5 Objection Responses
1. **"We use Snowflake"** → "How's it working? Any cost concerns?" → 70% savings
2. **"Too expensive"** → "Compared to what?" → Actually 70% cheaper than alternatives
3. **"Not ready"** → "What would make this a priority?" → Understand timeline
4. **"Send info"** → "What specifically?" → Convert to call
5. **"It's slow"** → "What instance size?" → SA can optimize

### Meeting Ask Formula
```
"Would it make sense to have one of our Solutions Architects
[specific value they'd get]? They're technical, not salesy.
How's [specific day] look?"
```

---

*Framework derived from successful MotherDuck BDR calls (MarketDial, BlueSky Solutions, Algoseven) and AE/CE team best practices.*

*Last updated: February 2026*
