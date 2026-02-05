# External-Facing Applications
**When they mention: customer dashboards, embedded analytics, multi-tenant apps**

---

## This is Home Field Advantage

External-facing analytics is where MotherDuck shines. We were built for this.

**Why we win:**
- Each query gets isolated compute (no contention)
- No over-provisioning for burst concurrency
- Pay only when queries run (scales to zero)
- No warehouse sizing/tuning headaches

---

## Acknowledge & Dig Deeper

```
"External-facing is actually a really interesting use case for us.

Tell me more about that - what kind of data are you serving to customers?
How many customers are we talking about, roughly?"
```

---

## Follow-Up Questions

- "What happens at 8am when everyone loads their reports?"
- "How are you handling concurrency today?"
- "Do you have to over-provision to handle burst traffic?"
- "Are customers complaining about dashboard load times?"
- "What does your current architecture look like for serving this data?"

---

## Key Talking Points

### The Concurrency Story
```
"Traditional warehouses require a big multi-tenant warehouse ready
for whatever bursting concurrency happens at 8am.

What MotherDuck does is each customer gets their own isolated compute
that only executes when they run queries. No contention for resources,
no over-scaling - it works really fluidly."
```

### The Cost Story
```
"Most customers overpay for external-facing because they provision
for peak traffic that happens 5% of the time.

With MotherDuck, you only pay when queries actually run. Scales to
zero between queries. No idle costs."
```

---

## If They're Using Snowflake for This

```
"A lot of customers actually keep Snowflake for their internal warehouse
and use MotherDuck specifically for the external-facing layer.

The concurrency model just works better for multi-tenant use cases.
No warehouse contention, no over-provisioning."
```

→ [[06-Competitors/Snowflake]]

---

## Technical Questions They'll Ask

| Question | Answer |
|----------|--------|
| "How do you handle thousands of concurrent users?" | "Each query gets isolated compute. No contention." |
| "What about latency?" | "Sub-second for most analytical queries. No cold starts." |
| "How does pricing work for high concurrency?" | "Pay per query, not per user. Actually cheaper at scale." |
| "Can we white-label this?" | "Yes - embedded analytics is a core use case." |

→ [[09-Reference/Technical Questions#Single Node Architecture]]

---

## When Ready to Close

```
"External-facing is honestly one of our best use cases.

Let's get you in front of an engineer who can walk through
the architecture and show you how it would work for your setup.

How's your calendar look later this week?"
```

→ [[08-Close/Standard Close]]
