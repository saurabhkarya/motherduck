# Cold Call Framework
**Goal: Book a meeting with AE/CE**

---

## Phase 1: Opening (First 30 Seconds)

### Inbound Lead (Signed Up / Downloaded Guide)
```
Hey [Name], this is Arya - I'm on the product team at MotherDuck.

I saw you [signed up for an account / downloaded our guide] - just wanted
to see what brought you to MotherDuck and what you're working on?
```

### Cold Outbound
```
Hey [Name], this is Arya from MotherDuck. Did I catch you at an okay time?

[Wait for response]

I'll be quick - I'm not sure we're a fit, but we help data teams run
analytics 70% cheaper than Snowflake with zero infrastructure to manage.

Is that something worth a 30-second conversation?
```

### Permission Bridge
- "Do you have 30 seconds?"
- "Is now a terrible time?"
- "Can I steal a quick minute?"

---

## Phase 2: Discovery Layer 1 - Understanding Their World

### The Big Question
```
Before we dive in, it would help to understand your data landscape.
What are you using for your data stack and what brought you to explore MotherDuck?
```

### Alternative Openers
- "How are you managing your data right now - where is it stored?"
- "What's your current setup for analytics?"
- "When someone on your team has a data question, what happens from question to answer?"
- "Who touches the data before it becomes useful?"

### Capture
- **Current Warehouse:** Snowflake / BigQuery / Redshift / Databricks / Postgres
- **Data Volume:** GBs / TBs / PBs
- **Team Size:** Solo / Small team / Large org
- **Use Cases:** Analytics / BI / Customer-facing / ML

---

## Phase 3: Discovery Layer 2 - Pick a Pain

### Listen for Pain Signals
| Signal | Pain Category |
|--------|---------------|
| "It's expensive" / "Costs keep growing" | [[#Cost Pain]] |
| "It's slow" / "Queries take forever" | [[#Speed Pain]] |
| "It's complex" / "Too many moving parts" | [[#Complexity Pain]] |
| "We're just exploring options" | [[#Exploring Options]] |
| "Running on Postgres" | [[#Postgres Pain]] |
| "Data is stale" / "Nightly refreshes" | [[#Freshness Pain]] |

### Cost Pain
```
"That's a common challenge we hear."

Help me understand the cost picture - what are you roughly spending
per month and what's driving those costs?

Is it specific workloads, certain teams, or just overall volume?
```

**Dig Deeper:**
- "What would acceptable cost look like - cut in half or just stop growth?"
- "Are there queries people avoid running because of cost?"
- "Have you had to shut down workloads or limit users because of cost?"

### Speed Pain
```
"What part usually takes the longest?"

Are we talking seconds, minutes, or longer?
Is it all queries or specific types - joins, aggregations, large tables?
```

**Dig Deeper:**
- "What happens when people are waiting?"
- "Do people abandon questions or skip follow-up analysis?"
- "How does that affect decision-making speed?"

### Complexity Pain
```
"Who understands your data flow end-to-end?"

If that person was out for a week, what would break?
How long does it take someone new to feel productive?
```

**Dig Deeper:**
- "How many tools are in the stack?"
- "Who maintains the infrastructure?"
- "What's the onboarding time for new analysts?"

### Postgres Pain
```
"How do you make sure analytics doesn't slow down production workloads?"

Has there ever been an incident where a heavy query impacted the app?
Are you using read replicas or query limits to manage this?
```

### Freshness Pain
```
"What decisions are being made on yesterday's data?"

What would change if the data was available sooner?
Is this blocking AI/ML initiatives or experimentation?
```

### Exploring Options
```
"What prompted you to start exploring?"

Is there a specific problem you're trying to solve, or more of a
general 'let's see what's out there'?
```

---

## Phase 4: Discovery Layer 3 - Quantify the Pain

### For Cost Pain
```
"So you're spending $X and it's trending up - that's helpful context."

If you're under [X TB] and spending [$Y], that doesn't quite add up
and is actually a sweet spot for us.

We see this a lot - the per-query model gets expensive with moderate
data volumes. We charge by compute time, not per query, so exploratory
analysis doesn't cost extra.
```

### For Speed Pain
```
"That's the worst combo - expensive AND slow."

How much data are we talking about - ballpark terabytes?
How many people are actively querying?
```

### For "Don't Know" Responses
```
"Let me ask this differently - is there anything you've had to stop
doing or limit because of cost?"

For example, have you had to remove data, reduce query frequency,
or tell people to stop running certain reports?
```

### Magic Wand Question
```
"If you could wave a magic wand and everything worked perfectly,
what would that look like?"
```

### Quantify Impact
```
"What's the impact to your business? Is this a big deal or a
smaller annoyance?"
```

---

## Phase 5: Objection Handling

### Framework: Accept First, Then Pivot
Never argue. Acknowledge → Clarify → Pivot

---

### Timing Objections

#### "We're not really looking for anything right now"
```
"Most teams we talk to aren't. I'm not trying to sell you anything today."

I just want to see if it would be useful to test your setup against
what's possible - or would that be a waste of time?
```

#### "It's too early"
```
"That's fair - what would 'ready' look like in your mind?"
```

#### "Check back next quarter"
```
"Happy to do that. What's changing next quarter that would make
this more relevant?"

[If real reason] "Perfect, I'll reach out in [month]. Anything I
can send in the meantime?"
```

#### "We just signed a contract with [competitor]"
```
"Understood - contracts are commitments. When does that come up
for renewal?"

Would it be helpful to reconnect a few months before then so you
have options? I can put a reminder on my calendar.
```

---

### Status Quo Objections

#### "We already use Snowflake/BigQuery"
```
"I'm not suggesting you rip anything out."

I'm just saying let's look for workloads that don't belong there.
Are there any queries you avoid running because of cost or speed?
```

#### "Postgres is fine"
```
"It usually is - until analytics and production start competing."

I just want to understand if that's a risk for you yet?
```

#### "We already have something in place"
```
"Totally fair, lots of teams do."

This is a quick sanity check to see if there's any incremental lift
we can add - would it be crazy just to take a look?
```

#### "Works fine" / "No problems"
```
"What's the annoying part of that - even if it's small?"
```

---

### Effort Objections

#### "Migration sounds painful"
```
"That hesitation makes sense."

What's different here is teams usually start alongside what they
already have - so there's no big migration, just a parallel test.
```

#### "We don't have time"
```
"That makes sense - everyone's stretched thin."

That's actually why teams like MotherDuck - it's serverless, so
there's nothing to manage. Most teams are running queries within
an hour of signing up.
```

#### "I'm busy"
```
"100% - I figured that. That's why I'm calling now instead of
sending another email."

Is there a better time for a quick 5-minute call this week?
```

---

### Interest Objections

#### "Just send me more info"
```
"More than happy to - what specifically would be most helpful?
Pricing? Technical docs? Customer stories?"

I'll send that over and give you a follow-up call to work out
next steps if it's interesting - sound good?
```

#### "We don't need this"
```
"That's totally fair - this might not be a priority for you."

The goal of an intro call is really just to confirm whether there's
any incremental lift at all you might be missing - if there isn't,
you'll know quickly.
```

#### "Not interested"
```
"Totally fair - that's actually helpful feedback."

Before I let you go, can I ask one thing - what would need to change
for this to become painful enough to revisit?

If that starts happening, would it be useful to already know what
options exist?
```

---

### Technical/Fit Objections

#### "Our data is too big"
```
"Scale is important to get right. How much data are we talking about?"

[If <10TB] "That's actually our sweet spot. MotherDuck handles
gigabytes to low terabytes really well."

[If petabytes] "For petabyte-scale, you might need a different
architecture. That said, many teams use MotherDuck for specific
use cases alongside their main warehouse."
```

#### "Is it production-ready?"
```
"Fair question - you want to know you can rely on it."

We're SOC 2 Type II compliant, have HIPAA BAAs available, and
companies like [examples] run production workloads on us.

What specific concerns can I address?
```

#### "We don't have a data team"
```
"Not every company has dedicated data people."

Who handles data and analytics today - founders? Engineers?

MotherDuck is serverless - no ops required. If you can write SQL,
you can use it. Plus, our AI features help non-technical users
query data in plain English.
```

---

### Trust Objections

#### "I've never heard of MotherDuck"
```
"We're newer than Snowflake, for sure."

MotherDuck was founded by the team behind Google BigQuery, with
leaders from Snowflake and Databricks. We're backed by a16z,
Redpoint, and other top investors.

But the best proof is trying it - our free tier lets you evaluate
risk-free.
```

#### "What security certifications do you have?"
```
"Great question. MotherDuck is SOC 2 Type II certified - that's
the gold standard for cloud service security. We're also GDPR
verified and offer HIPAA BAAs for healthcare customers.

Want me to share our SOC 2 report or support your security questionnaire?"
```

---

## Phase 6: Competitor Handling

### Snowflake
```
"Snowflake's a solid product - a lot of our customers came from
Snowflake actually."

The main reasons teams switch: cost (we're typically 70% cheaper
because you only pay when queries run - no idle costs) and simplicity
(no warehouse sizing, no cluster tuning).

How's Snowflake working for you cost-wise?
```

**Landmine Questions:**
- "How much do you pay when no one's querying?"
- "Who's responsible for warehouse sizing and tuning?"
- "What happens when someone leaves a warehouse running?"

### BigQuery
```
"Fun fact - MotherDuck was founded by the original designers of BigQuery."

They built MotherDuck because they saw an opportunity to make something
even simpler and faster, especially for smaller datasets where BigQuery's
architecture is overkill.

We benchmark 4x faster, and our hybrid execution means you can test
locally with DuckDB - which BigQuery can't do.
```

**Landmine Questions:**
- "How predictable are your BigQuery costs month-to-month?"
- "How do you test queries before running on production data?"
- "Have you ever been surprised by a BigQuery bill?"

### Databricks
```
"Databricks is great for heavy ML workloads."

Quick question - what's your primary use case? ML/AI or analytics?

[If analytics] For analytics, MotherDuck is simpler and more cost-effective.
You're paying for Spark complexity and ML features you may not need.
```

**Landmine Questions:**
- "How long does it take to run a simple ad-hoc query?"
- "Do you need Spark for your analytics use case?"
- "What percentage of workloads are ML vs. analytics?"

### ClickHouse
```
"That's a common comparison."

The main things we hear from people who left ClickHouse:
1. We handle joins much better - ClickHouse struggles with complex joins
2. Our SQL is standard and easier to adopt - ClickHouse has its own dialect
3. We're more cost-efficient - happy to show you the benchmarks

What's your timeline on making a decision?
```

---

## Phase 7: Common Questions & Responses

### Technical Questions

#### "How does MotherDuck differ from DuckDB?"
```
DuckDB proves you don't need a distributed system for analytical queries -
a single machine is incredibly powerful.

But when you have datasets larger than your laptop, or want to share
data across teams, you need the cloud.

MotherDuck is serverless DuckDB - same performance and efficiency, but
with cloud storage, sharing, collaboration, and larger compute.
```

#### "How do we stream Postgres data into MotherDuck?"
```
Two phases:

1. Initial Load: Snapshot your Postgres, load into local DuckDB, push
   to MotherDuck. Fastest for bulk upload and testing.

2. Ongoing Sync: CDC streaming with Estuary - captures all changes
   real-time and streams continuously. We work closely with their team,
   it's cost-effective, and has a free tier for trials.
```

#### "What about single-node vs. distributed?"
```
Distributed systems split data across many machines, break queries into
pieces, and shuffle results across the network. Great for petabytes, but
adds latency and complexity for smaller datasets.

Single-node (MotherDuck): Each query runs on one powerful machine, data
is local to compute, no shuffling. Faster for analytical queries, simpler,
and you only pay for compute time - not data scanned.

Sweet spot: GB to ~10TB. Above that, distributed might make sense.
```

### Pricing Questions

#### "How does pricing work?"
```
Three components:

1. Platform fee: $25/month (Lite) or $100/month (Business - includes
   features like read scaling for customer-facing dashboards)

2. Storage: $0.08 per GB per month

3. Compute: Standard instances are $1.44/hour of uptime - not per query

So for a small team with ~1TB data and moderate querying, you're looking
at $150-300/month. Compare that to thousands or tens of thousands on
Snowflake/BigQuery.
```

#### "Why is it cheaper?"
```
Two reasons:

1. We charge by compute time, not data scanned. So exploratory analysis
   doesn't rack up cost.

2. We don't want you making business decisions based on warehouse cost.
   Analysts can run as many queries as they need without worrying.
```

---

## Phase 8: Pre-Close & Value Reframe

### Cost Pain Pre-Close
```
"We don't want you making business decisions based on warehouse cost
instead of what's best for the business."

Our pricing model is fundamentally different - we don't charge per query,
we charge by compute uptime. Analysts can run as many queries as they
need without racking up cost.

Let me give you a concrete example - if you're under 2TB, you'll likely
spend $200-800 for full analytics workloads. With [competitor] you're
probably in the thousands or tens of thousands.
```

### Speed Pain Pre-Close
```
"Most teams don't realize how much speed they've given up until they
get it back."

Faster answers mean more questions asked, which means better decisions.
```

### Complexity Pain Pre-Close
```
"When only a few people understand the system, it becomes a bottleneck,
not a tool."

Lower cognitive load means faster onboarding and less dependency on specialists.
```

### General Pre-Close
```
"It might be worth pressure-testing whether there's a simpler, faster
way to get answers without adding cost or risk."
```

---

## Phase 9: The Close

### Standard Close
```
"Rather than me trying to explain this over a quick call like this,
the next step would be to schedule a 20-minute call with one of our
executives."

They can walk you through specifically how this would work for your
use case - does it make sense to explore that?
```

### Cost Close
```
"This has been really helpful. [Summarize: cost concerns, data size, team]"

That's a strong use case for testing MotherDuck.

Let's schedule a 30-min demo where I'll show you under the hood how we
work, walk through pricing specifically for your use case, and we can
talk about running a 3-week proof of concept. Sound good?
```

### Competitor Close
```
"Typically what I'd recommend is running a free 3-week trial where you
can compare us side-by-side with [competitor] or any other options
you're considering."

I'll put you in a shared Slack channel with our engineering team -
they'll help you load the data, optimize the queries, and run benchmarks.

Does that sound like something worth doing?
```

### Calendar Lock
```
"Are you in front of your laptop? I've just sent you a calendar invite
with [AE/CE name] - just let me know if you got it and I'll lock you in
for a quick call."
```

---

## Phase 10: Why Meet? (If They Push Back)

**Use Clark's guidance - pitch the meeting value:**

```
"Here's what the meeting actually does for you:

1. We'll show you your competitors and how they're using MotherDuck
2. We'll help you understand if your use case is even a good fit -
   might save you a week of kicking the tires
3. We'll talk through best practices for data modeling that will save
   you trial-and-error time
4. We'll test what actually matters, understand your goals, and see
   how we fit in

Even if we're not a fit, you'll know in 20 minutes instead of a week."
```

---

## Quick Reference: Objection Cheat Sheet

| Objection | Response |
|-----------|----------|
| "We use Snowflake" | "What would need to change to consider alternatives?" |
| "No budget" | "Free tier has 10GB - want the link?" |
| "Too expensive" | "Compared to what? We're typically 70% cheaper." |
| "Not ready" | "What would make this a priority?" |
| "Never heard of you" | "Founded by BigQuery team. Want to see it?" |
| "Send info" | "What specifically? Let's schedule a walkthrough." |
| "Talking to others" | "Who else? I can send comparison docs." |
| "Just exploring" | "What prompted the exploration?" |
| "Migration is hard" | "Teams run us alongside - no big migration." |
| "We're good" | "What's the annoying part, even if small?" |

---

## Call Flow Summary

```
OPEN (30 sec)
    ↓
DISCOVER (2-3 min)
    → Stack / Volume / Team
    ↓
PICK A PAIN
    → Cost / Speed / Complexity / Freshness
    ↓
QUANTIFY
    → "What's the business impact?"
    ↓
HANDLE OBJECTIONS
    → Accept first, then pivot
    ↓
PRE-CLOSE
    → Reframe value
    ↓
CLOSE
    → "20 min with an exec - make sense?"
    ↓
CALENDAR LOCK
    → "Got the invite?"
```

---

## Related Files
- [[Cold Call]] - Original notes
- [[1. Discovery Layer 1/Start]] - Discovery deep dive
- [[Discovery Layer 2/Expensive]] - Cost discovery
- [[Pricing Walk-through]] - Pricing breakdown
- [[Competitors/ClickHouse]] - Competitor handling
- [[Feedback/Clark - Friday 30 Jan]] - Coaching notes
