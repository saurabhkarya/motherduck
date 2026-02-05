# Core Principles
**Key coaching Scott Corrina - internalize these**

---

## The Golden Rules

### 1. Go Undetected
Data engineers hate being sold to. Your job is to:
- Be relaxed, casual, aloof
- Never trigger fight-or-flight defenses
- Sound like an advisor, not a vendor
- Avoid feeling like an interrogation

> "We don't have the privilege of selling to someone who's down to talk. People are not down to talk. So we have to go undetected."

---

### 2. Give and Get
Every interaction should follow this pattern:
1. **Give** - Answer their question helpfully, non-transactionally
2. **Leave something open** - Allude to something interesting
3. **Ask** - Open-ended question back to them

> "You need to give a little bit to get a little bit."

**Example:**
```
Them: "What is MotherDuck?"
You: "MotherDuck is a cloud data warehouse built on top of DuckDB.
      We have a very unique architecture which gives people performance
      gains and cost controls compared to traditional alternatives -
      and opens up some other use cases too." [STOP - let them ask]
```

---

### 3. Never Ask Yes/No Questions
Yes/no questions kill conversations instantly.

**BAD:**
- "Is cost a concern?" → "No." → Call dead.
- "Are you happy with Snowflake?" → "Yes." → Call dead.
- "Is that something you're thinking about?" → "No." → Call dead.

**GOOD:**
- "What types of things are you powering with that?"
- "Tell me a little about that - what do you use Snowflake for today?"
- "What's on your mind from a data strategy perspective?"

> "It's like jazz. You can't riff off a yes/no answer."

---

### 4. Don't Box Yourself In
Never pitch before you know their situation.

**What happened in the mock:**
- Led with "we're fast and cheap"
- Prospect said "I don't care about that"
- Nowhere to go → call dead

**What to do instead:**
- Give a soft, open pitch that invites questions
- Listen for what they care about
- THEN position against their actual needs

---

### 5. Find the Hook
Think about where you can get home field advantage:

| Hook | When It Works |
|------|---------------|
| **External-facing analytics** | Customer-facing apps, embedded dashboards |
| **Gold tier / serving layer** | Need to serve data to lots of consumers |
| **Agentic / MCP** | AI-first workflows, Cursor/Claude users |
| **Cost** | Startups, SMBs who feel bad spending on Snowflake |
| **Concurrency** | Multi-tenant apps, lots of simultaneous users |

**Where NOT to compete head-on:**
- Snowflake for core data warehouse when they're happy with cost
- Enterprise governance-heavy environments

> "Put us where we have home field advantage."

---

### 6. Think About the Job to Be Done
They don't care about tools. They care about outcomes.

**BAD:** "I imagine you're struggling with Snowflake lately..."
**GOOD:** "What types of workloads are you running? Any external-facing?"

> "Think about the job to be done. The tools are the second part."

---

### 7. Book the Meeting - Don't Over-Close
Once they're interested or asking questions, STOP. Book the meeting.

```
"Let's do this - how's your calendar look later this week?
We can set up some time, go through MotherDuck,
and answer any questions you have."
```

Done. You're just here for the meeting.

---

## The MotherDuck Elevator Pitch

**When they ask "What is MotherDuck?"**

```
"MotherDuck is a cloud data warehouse built on top of DuckDB.

We have a very unique architecture which offers people a lot of
performance gains and cost controls compared to traditional alternatives -
and opens up other use cases too."

[STOP. Let them ask the next question.]
```

**Key elements:**
- Cloud data warehouse (not "storage layer")
- Built on DuckDB
- Unique architecture
- Performance + cost + "other use cases" (leave this vague/intriguing)

---

## Explaining Single Node (CRITICAL)

**The problem:** People hear "single node" and think "this won't scale."

**The reality:** Each query gets its own isolated compute. We can have hundreds/thousands running.

**How to explain it:**

```
"We scale out to lots of different nodes.

Think of it this way - imagine you're powering an external-facing
application with lots of customers and you need to think about concurrency.

With traditional warehouses, you need a big multi-tenant warehouse
ready for whatever bursting concurrency happens at 8am when all your
customers load their reports.

What MotherDuck does is each tenant has its own isolated compute
that only executes when they run queries. So you don't have to worry
about contention for resources or over-scaling. It works really fluidly.

And we have different instance sizes - some very big, some very small -
purpose-built for different parts of your data stack."
```

**Key phrases:**
- "Scale out to lots of nodes"
- "Each query gets isolated compute"
- "No contention for resources"
- "Different instance sizes for different workloads"

---

## When You're On Your Back Foot

If they're being difficult or you feel defensive:

1. **Don't explain yourself** - flip it back to a question
2. **Be charming and aloof** - "Maybe I misunderstand a little bit..."
3. **Put it on them** - "What's on your mind from a data strategy perspective?"

> "When you're on your back foot, make it feel like you're answering the question, then flip back to a really good question."

**Judo move:**
```
"Yeah, we definitely see customers using us different ways.
Maybe it'd be helpful if I understood a little bit about
how you're approaching these things today?"
```

---

## Avoiding Competitor Traps

**Don't directly attack competitors.** It triggers defenses.

**Instead:**
```
Them: "We use Snowflake today."
You: "Cool - tell me a little about that. What do you use Snowflake for?
      What types of things are you powering?"
```

Then look for hooks:
- External-facing? → We're better
- Lots of concurrent users? → We're better
- Cost is fine? → Find another hook (agentic, gold tier)

**If they're happy with Snowflake on cost:**
> "Don't try to position on cost for their normal warehouse. Find another hook - external facing analytics, MCP, something where we have home field advantage."

---

## Notepad Reminders (Tape to Your Monitor)

- [ ] No yes/no questions
- [ ] Give → Leave open → Ask
- [ ] Don't pitch until you know their situation
- [ ] Where's my hook? (external, agentic, cost, gold tier)
- [ ] Single node = each query gets isolated compute
- [ ] Book the meeting, don't over-close

---

← Back to [[00-Start/START HERE]]
