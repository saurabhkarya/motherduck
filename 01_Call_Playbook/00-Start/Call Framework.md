# Call Framework
**Based on analysis of 36 real MotherDuck BDR calls**

---

## Call Flow (5-10 minutes ideal)

```
TRIGGER OPEN (0-30s) → DISCOVERY (30s-2min) → BUSINESS PIVOT (1-2min) →
PROBLEM ID (1-3min) → SIZING (1-2min) → SA POSITIONING (1-2min) → EXIT
```

---

## Phase 1: Trigger-Based Opening (0-30 seconds)

**What Works (from DEAL calls):**
```
"Hi [Name], this is [Your Name] from MotherDuck.
I saw that you signed up for our 21-day free trial.
How's it going?"
```

**Why It Works:**
- References their action (not cold)
- Opens with curiosity, not pitch
- "How's it going?" invites them to talk

**Variations:**
- "I saw you downloaded our ebook..."
- "I noticed you registered for our webinar..."
- "I saw you signed up. What have you been able to test?"

---

## Phase 2: Discovery (30 seconds - 2 minutes)

**High-Performing Questions:**

| Question | Why It Works |
|----------|--------------|
| "What have you been working on?" | Opens them up, reveals use case |
| "Is this for work or personal?" | Quick qualifier |
| "What's your current data warehouse?" | Reveals competitor + pain |
| "What have you been able to test so far?" | Shows genuine interest |
| "Do you need real-time or is batch okay?" | Determines if DWH needed |
| "Do you have multiple data people or mostly solo?" | Identifies collaboration need |

**Signals to Listen For:**
- "We use [Snowflake/BigQuery]" → Ask: "How's that working for you?"
- "Personal project" → Pivot to business (Phase 3)
- "Student/learning" → DQ early, don't waste 21 minutes
- "Just me basically" → Likely too small for managed DWH

---

## Phase 3: Business Use Case Pivot (1-2 minutes)

**The Money Question (from Guy Caprioli DEAL):**
```
"Any chance there are use cases or projects at work
where MotherDuck may come in handy?"
```

**Why This Is Critical:**
- Many signups start as personal exploration
- This converts hobby → business opportunity
- Guy's call went from "side project" to "5 facilities, 200GB"

**Variations:**
- "Is this going to be something you implement at work?"
- "Would this be for a company use case or personal exploration?"
- "Beyond the personal project, any team needs this could solve?"

---

## Phase 4: Problem Identification (1-3 minutes)

**When They Share a Problem - Don't Defend:**

❌ Wrong: "Actually, that's not true, we're very fast..."

✅ Right: "That's not good at all. What instance size are you using?"

**The Ally Mauldin Technique:**
- She said: "MotherDuck is slower than BigQuery"
- BDR said: "Okay, that's not good at all"
- Then diagnosed: "What kind of instance size?"
- Reframe: "It's not about buying more features, it's about selecting the right instance size"
- Result: Meeting booked

**Key Diagnostic Questions:**
- "What instance size are you using?"
- "Did you copy the queries directly from [competitor]?"
- "How much data are you scanning?"

---

## Phase 5: Sizing Questions (1-2 minutes)

**Ask Near the End (from Guy Caprioli call):**
```
"Do you know what your data volume is like?"
```

**Response Handling:**

| Volume | Response |
|--------|----------|
| <10GB | "Free tier is perfect. Let me send resources." |
| 10GB-1TB | "Sweet spot. Room to grow. That's great." |
| 1-10TB | "Right in our wheelhouse for analytics." |
| 10TB+ | "Let's talk to our SA about architecture." |
| Petabytes | "Different solution needed - graceful DQ" |

**Additional Sizing Context:**
- 800K rows + solo analyst = too small (Maximilian Schön)
- 200GB + 5 facilities = sweet spot (Guy Caprioli DEAL)
- 1.5B rows + production = qualified (Ally Mauldin DEAL)

---

## Phase 6: SA Positioning (1-2 minutes)

**Frame as VALUE, Not Sales:**
```
"We offer sessions with our Solutions Architect to help you
get up and running faster and get a better experience with
the product overall."
```

**The Ask (from DEAL calls):**
```
"Do you think you guys have time early next week to talk
to one of our Solutions Architects?"
```

**What Makes This Work:**
- "Solutions Architect" not "sales rep"
- "Help you get up and running faster" = value
- Specific day suggestion: "How's Tuesday or Wednesday?"

---

## Phase 7: Exit Strategies

### DQ Exit (Rajat Chelani model - 1:14 call)
```
"Okay, well I will let you go. I appreciate the transparency.
If anything changes, you know where to find us."
```

### Nurture Exit (Joel MacPherson model)
```
"Sounds like you want to try it on this new client first.
I'll send you a Loom and some resources. Let's connect
on LinkedIn to stay in touch."
```

### Community Slack Exit (for personal projects)
```
"I'd love to send you an invite to the community Slack
so you can ask questions and stay connected to others
using MotherDuck. Would that be helpful?"
```

### DEAL Exit
```
"Let's lock in [specific day]. I'll send the invite now.
Should we include anyone else on the call?"
```

---

## RECOVERY PLAYS

### Wrong Contact Recovery (Sia Talebi)
When prospect is wrong contact but cooperative:
```
You: "No worries at all. Is there another contact I should
maybe try? Sorry for the confusion."

[Build rapport first - personal connection helps]

You: "What kind of dog do you have?"
[Small talk creates obligation to help]

Result: Obtained phone number for tech colleague
```

### Bad Timing Recovery (Rohit Verma)
When prospect is clearly tired/busy:
```
You: "I know it's late over there. I'm sorry.
Would it be better if I call back later?"

Prospect: "Yeah, that would be great."

You: "How about Monday - would this time be okay?"
```
**Result:** Converts wasted call into scheduled callback.

### "Not Interested" Early Recovery (Alex Pellett)
When they shut down immediately:
```
You: "I don't want to bother you if there's no opportunity here.
But can I ask - what made you sign up in the first place?"
```
**Result:** Often surfaces actual use case or real objection.

---

## PRE-DEMO CONFIRMATION CALLS

**The Hae Yoo Technique (20-second DEAL):**

When prospect already has meeting scheduled:
```
You: "Hey, hey hey, this is Clark from MotherDuck.
I sent over this time. Does it still work?"

Prospect: "Yeah, I'm logging in right now."

You: "Okay, cool. Thanks, we're on the call.
Take your time. See you in a second."
```

**When to Use:**
- Within 24 hours of scheduled demo
- Especially for warm prospects
- Creates personal connection before demo

**Result:** Near 100% show rate on confirmed demos.

---

## RED FLAGS: When to DQ Fast

### Immediate DQ Signals

| Signal | DQ Response |
|--------|-------------|
| "Personal project" | Offer community Slack, exit |
| "Student/learning" | "Great - enjoy the free tier. Good luck!" |
| "Happy with Snowflake" | "Appreciate the transparency. If anything changes..." |
| "I work in sales, not data" | "Got it. Thanks for the time." |
| "Just exploring" + no business case | Quick nurture exit |
| "I'm in the job market" | Learning for interviews - DQ |
| "Studying for certification" | Free resource hunter - DQ |
| "Just me basically" (solo + small data) | Too small for managed DWH |

### Learning-Only Detection

**Red Flag Phrases:**
- "I'm learning to be..."
- "I'm trying to upskill myself"
- "I wanted to explore this"
- "I'm preparing for interviews"
- "Just for curiosity"
- "I'm not really building anything"
- "Reading a book on DuckDB"

**When Heard:** Acknowledge, offer community/resources, move on in <2 min.

### Time Killer Warning
George Cosio said "I'm a student" at 1:07... call went 21 minutes.

**Should have been 2 minutes max.**

---

## WHAT DIFFERENTIATES DEALS

| Factor | DEAL Signals | DQ Signals |
|--------|--------------|------------|
| **Decision Power** | "I run the business" | "Need to ask my team" |
| **Data Volume** | 200GB-1.5B rows | "800K rows" / personal |
| **Questions Asked** | They ask about support/integration | Just answering, not engaging |
| **Business Problem** | Clear, real, urgent | Learning / hobby |
| **Next Steps** | Accepts specific date/time | "If anything changes" |
| **Team Size** | Multiple people querying | "Just me" |
| **Data Needs** | Real-time or frequent queries | Monthly batch reporting |

---

## TALK TRACKS THAT CLOSE

### The Boundary-Respect Pivot (Guy Caprioli)
```
Prospect: "I'm not interested in talking about my work"

You: "Okay, got it. Happy to let you work solo on it."
[pause]
"Any chance there are use cases at work where this
may come in handy?"
```

### The Performance Objection Handle (Ally Mauldin)
```
Prospect: "It's slower than BigQuery"

You: "That's not good at all. That's actually kind of
terrible. What instance size are you using?"

[After they answer]

"It's not about buying more features - it's about
selecting the right instance size. Our SA can help
you optimize that. Got time next week?"
```

### The Competitor Locked-In Handle (Brendan Ferris)
```
Prospect: "We use Snowflake and are happy"

You: "Makes sense. Why'd you choose Snowflake
originally? Was it the ecosystem?"

[Get intel, then]

"Appreciate the heads-up. If anything changes on
cost or performance, you know where to find us."
```

### The "How Did You Get My Number?" Handle (Faiz Kothari)
```
Prospect: "How did you get my phone number?"

You: "It's just part of our contact list from our CRM.
Good question though - I'm glad I reached you."

[If they're a competitor, use humor]

You: "Oh, so you're a competitor. Is this like a threat?
Should I be worried?"
[Prospect laughs, tension breaks]
```

### The "We Just Started Using Competitor" Handle (Varun)
```
Prospect: "We just started using Databricks"

You: "I hear you - if you're locked into Databricks,
that makes sense. Keep us in mind if that changes
or if you need another option down the road."
```

---

## COMPETITIVE INTELLIGENCE

### Microsoft Fabric Pattern (Vishnu Kchitti)
```
"Everyone who's moving to Fabric is someone who doesn't
have a data warehouse yet. Fabric is typically chosen by
orgs without existing DWH knowledge."
```

**When They Mention Fabric:**
```
"I hear that a lot. Fabric makes sense if it's your first
warehouse because of the Microsoft integration. But if
you're evaluating multiple options, MotherDuck's SQL
compatibility and flexibility are different advantages."
```

**Key Insight:** First-time DWH buyers going to Fabric = hard to win back.

### Why Prospects Choose Alternatives
- **DuckDB Local:** "I wanted a quick solution and didn't see how to load data" (connector complexity)
- **Neon:** Simplicity for simpler projects
- **Fabric:** Microsoft integration for first DWH customers
- **Snowflake:** Ecosystem and ease of use

---

## CALL EFFICIENCY METRICS

| Scenario | Target Duration | Notes |
|----------|-----------------|-------|
| Personal Project DQ | 2:00 - 3:00 | Offer community, exit |
| Wrong Contact + Referral | 2:30 - 2:45 | Get contact info |
| Bad Timing/Reschedule | 0:55 | Set callback |
| Pre-Demo Confirmation | 0:20 | Confirm attendance |
| Community Offer | 3:00 - 3:30 | Nurture relationship |
| Competitor Intel | 3:00 - 5:00 | Gather info, exit gracefully |
| Qualified Discovery | 5:00 - 10:00 | Full flow to SA ask |

**Optimal Call Length:** 2:30-4:00 for discovery without pushing

---

## DQ CHECKLIST

Before spending more than 3 minutes, confirm:

- [ ] Work use case (not personal/learning)
- [ ] Multiple people need access (not solo)
- [ ] Real-time or frequent queries (not monthly batch)
- [ ] Data volume warrants DWH (not <1GB)
- [ ] Technical decision-maker exists
- [ ] Not locked into competitor
- [ ] Not studying for certification/job hunting
- [ ] Recognizes the company/product

**If 3+ boxes unchecked:** Offer community Slack, nurture exit.

---

## AI & MCP POSITIONING

### When to Mention AI Features

**Listen for these signals:**
- "Non-technical people need data access"
- "We don't have SQL experts"
- "Using Claude/Cursor for development"
- "Business users wait on analysts"

### The AI Toolkit

| Feature | What It Does | When to Mention |
|---------|--------------|-----------------|
| PROMPT QUERY | Natural language → SQL | Small team, non-SQL users |
| AI FixIt | Auto-corrects SQL errors | SQL complexity frustration |
| MCP Server | Connect AI tools to database | Uses Claude/Cursor/Windsurf |

### Talk Tracks

**For Non-Technical Teams:**
```
"We have PROMPT QUERY—you type a question in plain English
like 'What were my top 10 customers last month?' and it
writes the SQL for you. No SQL experts needed."
```

**For AI-First Teams (Cursor/Claude users):**
```
"We have an MCP server that connects Claude or Cursor
directly to your database. Ask questions about your data
in natural language and it queries MotherDuck directly."
```

**For SQL Frustration:**
```
"We have AI FixIt that auto-corrects SQL errors. Typo or
syntax mistake? It just fixes it. No debugging commas."
```

### When NOT to Mention AI
- Prospect is highly technical and prefers raw SQL
- They've expressed AI skepticism
- Conversation going well without it
- They're focused purely on cost

*Lead with cost/speed/simplicity. AI is a bonus differentiator.*

---

## Quick Reference

### Call Flow
1. **Open**: Trigger-based ("I saw you signed up...")
2. **Discover**: "What have you been working on?"
3. **Pivot**: "Any chance there are use cases at work?"
4. **Problem**: Acknowledge, don't defend. Diagnose.
5. **Size**: "What's your data volume?"
6. **Ask**: "Got time next week for our SA?"
7. **Exit**: DEAL / Nurture / DQ (see above)

### Top 5 Questions
1. "What have you been working on?"
2. "Is this for work or personal?"
3. "Any chance there are use cases at work?"
4. "Do you need real-time or is batch okay?"
5. "What instance size are you using?"

### The Golden Reframe
```
"It's not about buying more features - it's about
selecting the right instance size."
```

### Community Slack Offer (DQ Recovery)
```
"I'd love to send you an invite to the community Slack
so you can ask questions and stay connected."
```

---

## COMPETITIVE POSITIONING (Key Themes)

### Against All Competitors

**Cost Optimization:**
```
"Per-query pricing + hybrid execution = significant savings over
traditional warehouses."
```

**Developer Experience:**
```
"Embedded, local-first approach that integrates naturally into
existing workflows. Your laptop becomes a warehouse."
```

**Zero Operations:**
```
"Fully serverless with no infrastructure to manage."
```

**Performance:**
```
"Vectorized execution engine delivers sub-second query times
for interactive analytics."
```

### The Status Quo Objection
```
"There's always a 'nobody gets fired for choosing the status quo'
mindset. But every major tool people now consider 'safe' - Snowflake,
Databricks, BigQuery - was once the risky, disruptive choice that
gave early adopters a competitive advantage.

MotherDuck represents a clear evolution in the stack. Proven pedigree:
our founder led the original BigQuery team at Google."
```

### The 99% Reframe
```
"Most teams don't query petabytes daily. For the 99% of workloads
at terabyte scale or less, MotherDuck delivers better price/performance."
```

### Quick Competitor Differentiators

| Competitor | Key Attack | Our Win |
|------------|------------|---------|
| Snowflake | "70% cheaper, no idle costs" | Cost |
| BigQuery | "Founded by BQ team, 4x faster" | Speed + Credibility |
| Databricks | "95% don't need Spark" | Simplicity |
| ClickHouse | "Joins suck, constant tuning" | Ease of use |
| Postgres | "OLTP ≠ OLAP, 10-100x faster" | Right tool |
| Redshift | "2012 tech, cluster waste" | Modern architecture |

→ [[06-Competitors/]] - Full battlecards

---

## DEALS FROM THIS ANALYSIS

| Call | Company | What Worked |
|------|---------|-------------|
| Ally Mauldin | MarketDial | Performance objection → SA meeting |
| Guy Caprioli | BlueSky | Hobby → business pivot (5 facilities, 200GB) |
| Anthony Lukach | Source Cooperative | Technical deep-dive, Iceberg discussion |
| Hae Yoo | Sona Asset Mgmt | Pre-demo confirmation (20 seconds) |

---

*Framework derived from 36 analyzed calls*
*Last updated: February 2026*

→ [[START HERE]]
→ [[05-Objections/Objection Quick Reference]]
