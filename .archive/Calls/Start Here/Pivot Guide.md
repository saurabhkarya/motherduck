# Pivot Guide
**How to redirect any conversation toward a meeting**

---

## Core Principle
Every response should lead to either:
1. **Deeper discovery** (learn more about their pain)
2. **The close** (book the meeting)

Never leave a conversation hanging. Always pivot to the next step.

---

## Pivot by Pain Type

### They Mention Cost
**Pivot to quantify:**
```
"Help me understand the cost picture - what are you spending monthly
and what's driving it?"
```

**Then pivot to value:**
```
"If you're under 2TB and spending $X, that doesn't add up - that's our
sweet spot. Let me show you what pricing would look like for your use case."
```

**Then pivot to meeting:**
```
"Rather than me trying to ballpark it, let's get you in front of someone
who can walk through exact pricing for your workloads."
```

---

### They Mention Speed
**Pivot to quantify:**
```
"How long are we talking - seconds, minutes, longer? All queries or
specific types?"
```

**Then pivot to impact:**
```
"What happens when people are waiting? Do they abandon questions or
skip follow-up analysis?"
```

**Then pivot to meeting:**
```
"Most teams don't realize how much speed they've given up until they
get it back. Worth 20 minutes to see the difference?"
```

---

### They Mention Complexity
**Pivot to quantify:**
```
"Who understands the flow end-to-end? If they're out, what breaks?"
```

**Then pivot to risk:**
```
"When only a few people understand the system, it's a bottleneck, not
a tool."
```

**Then pivot to meeting:**
```
"Let me show you how much simpler it can be - 20 minutes, no commitment."
```

---

### They Mention Postgres
**Pivot to risk:**
```
"How do you make sure analytics doesn't slow down production? Has there
ever been an incident?"
```

**Then pivot to solution:**
```
"Postgres is great at transactions - analytics is just a different job.
Separating them means production stays fast and analytics runs faster."
```

**Then pivot to meeting:**
```
"Let me show you how teams offload analytics off Postgres in a day."
```

---

## Pivot by Objection Type

### Timing Objections → Future Value

| Objection | Pivot |
|-----------|-------|
| "Not ready yet" | "What would ready look like? ... When that happens, would it help to already know your options?" |
| "Check back later" | "What's changing? ... I'll reach out in [X]. Anything I can send in the meantime?" |
| "Just signed a contract" | "When's renewal? ... Let me check in a few months before so you have alternatives." |

---

### Status Quo Objections → Hidden Pain

| Objection | Pivot |
|-----------|-------|
| "It's working fine" | "What's the annoying part - even if it's small?" |
| "We're happy with X" | "Are there any queries you avoid running because of cost or speed?" |
| "Already have something" | "Quick sanity check for incremental lift - would it be crazy just to take a look?" |

---

### Effort Objections → Ease

| Objection | Pivot |
|-----------|-------|
| "Migration sounds hard" | "Teams run us alongside - no big migration. Just a parallel test to see if there's lift." |
| "Don't have time" | "That's exactly why - it's serverless, nothing to manage. Teams query in an hour." |
| "Don't have a data team" | "You don't need one. Serverless, pure SQL. If you can write a query, you can use it." |

---

### Interest Objections → Value

| Objection | Pivot |
|-----------|-------|
| "Send me info" | "What specifically? ... I'll send that and follow up - sometimes a 5-min walkthrough is faster than reading docs." |
| "Not interested" | "Before I go - what would need to change for this to become worth revisiting?" |
| "We don't need this" | "Goal is to confirm if there's any lift you're missing. If not, you'll know in 20 minutes." |

---

## Pivot From "Just Exploring" to Qualified Pain

```
Them: "We're just exploring options."

You: "What prompted you to start exploring?"
     [Listen for trigger]

You: "Got it. So [restate trigger] - is that a big deal or a smaller annoyance?"
     [Quantify impact]

You: "That's exactly what we help with. Let me get you in front of
     someone who can show you specifically how."
```

---

## Pivot From Competitor Comparison to Meeting

```
Them: "We're looking at ClickHouse too."

You: "That's a common comparison. Main things we hear from people
     who came from ClickHouse: we handle joins better, standard SQL,
     and more cost-efficient."

     "What's your timeline on making a decision?"

     [If soon] "Perfect - let me set up a side-by-side. We'll help
     you load the data and run benchmarks."
```

---

## Pivot From Technical Questions to Meeting

```
Them: "How does streaming from Postgres work?"

You: [Short answer - 2-3 sentences max]
     "Initial snapshot, then CDC streaming with Estuary."

     "Rather than me going into all the details here, let me get you
     in front of an engineer who can walk through your specific setup."
```

---

## Pivot From Pricing Questions to Meeting

```
Them: "How much does it cost?"

You: "Depends on data size and compute needs. Ballpark - teams under
     2TB usually spend $150-400/month. Compare that to thousands on
     Snowflake."

     "Let me get you in front of someone who can give you exact numbers
     for your use case."
```

---

## The Meeting Pivot

### Standard
```
"Rather than me trying to explain this over a quick call, the next step
would be a 20-minute call with one of our executives. Make sense?"
```

### After Discovery
```
"This has been really helpful. [Summarize pain]. That's a strong use case
for MotherDuck. Let's get you on the calendar for a deeper dive."
```

### After Objection
```
"Look, I get it. Here's what I'd suggest - 20 minutes with someone who
can show you under the hood. If it's not a fit, you'll know fast."
```

### Selling the Meeting Value
```
"Here's what the meeting actually does for you:
- Shows you how competitors are using it
- Helps you understand if your use case is even a fit
- Saves you a week of kicking the tires
- 20 minutes to get answers instead of trial and error"
```

---

## Calendar Lock Pivot

Once they agree:
```
"Are you in front of your laptop? I've just sent you a calendar invite
with [Name] - let me know if you got it and I'll lock you in."
```

If they hesitate:
```
"I can shoot you a tentative for next week - even just as a reminder.
What day works better?"
```

---

## The Hard Stop Pivot

If nothing's working:
```
"Totally fair. Before I let you go - what would need to change for this
to become painful enough to revisit?"

[Listen]

"If that starts happening, would it be useful to already know what
options exist?"
```

This plants a seed and leaves the door open.
