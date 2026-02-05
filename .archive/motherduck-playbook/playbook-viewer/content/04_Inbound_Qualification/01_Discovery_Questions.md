# Discovery Questions Framework

Great discovery uncovers pain, timeline, and fit. Use these questions to qualify leads and set AEs up for success.

---

## The Discovery Call Structure

| Phase | Duration | Goal |
|-------|----------|------|
| Opening | 2 min | Build rapport, set agenda |
| Discovery | 10-15 min | Understand situation, pain, impact |
| Qualification | 3-5 min | Confirm fit, next steps |
| Close | 2 min | Book next meeting |

---

## Opening the Call

### Set the Agenda
```
"Thanks for taking the time, [First Name]. I've got about 20 minutes 
blocked—does that still work for you?

Great. Here's what I was thinking: I'll ask some questions to 
understand your situation, then I can share a bit about how 
MotherDuck might help. We can decide together if it makes 
sense to continue. Sound good?"
```

### Build Quick Rapport
- Reference something from their LinkedIn
- Mention a trigger event (funding, new role)
- Compliment something genuine about their company

---

## Current State Questions

Understand where they are today.

### Data Infrastructure
| Question | Why Ask It |
|----------|-----------|
| "What does your data stack look like today?" | Understand current tech |
| "What are you using for your data warehouse?" | Identify competitor |
| "How long have you been on [current solution]?" | Gauge switching likelihood |
| "How many people touch the data warehouse?" | Understand team size |

### Workflows
| Question | Why Ask It |
|----------|-----------|
| "Walk me through a typical analytics workflow for your team." | Understand process |
| "What tools do analysts use day-to-day?" | Map the ecosystem |
| "How do you handle data pipelines/ETL?" | Understand complexity |
| "Where does your data live? (S3, databases, etc.)" | Assess integration needs |

---

## Pain Discovery Questions

Uncover the problems they're facing.

### Cost Pain
| Question | Follow-up |
|----------|-----------|
| "How do you feel about what you're spending on your warehouse?" | "What would you do with that budget if you could cut it in half?" |
| "Have costs surprised you at all?" | "Tell me more about that." |
| "How predictable is your data spend month to month?" | "How does that affect planning?" |

### Speed/Performance Pain
| Question | Follow-up |
|----------|-----------|
| "How long do typical queries take to run?" | "How does that impact your workflow?" |
| "Are there queries you avoid running because they take too long?" | "What would it mean if those ran in seconds?" |
| "How much time does your team spend waiting for data?" | "What would they do with that time back?" |

### Complexity/Operations Pain
| Question | Follow-up |
|----------|-----------|
| "How much time goes into managing your warehouse infrastructure?" | "What else could that person/team be doing?" |
| "What happens when you need to scale up for a big job?" | "How long does that take?" |
| "What's the most frustrating part of your current setup?" | Let them talk. |

### Collaboration Pain
| Question | Follow-up |
|----------|-----------|
| "How do you share data and analyses with colleagues?" | "What's broken about that?" |
| "Can non-technical team members access data they need?" | "How do they get it today?" |
| "How do you handle different dev/prod environments?" | "What problems does that cause?" |

---

## Impact Questions (The Gold)

These reveal the stakes and urgency.

### Business Impact
| Question | Why It Matters |
|----------|----------------|
| "What happens if this problem doesn't get solved?" | Creates urgency |
| "How is this affecting your team's ability to deliver?" | Connects to real outcomes |
| "What decisions are harder without better data access?" | Ties to business value |
| "If you could wave a magic wand, what would your ideal state look like?" | Gets them to articulate value |

### Personal Impact
| Question | Why It Matters |
|----------|----------------|
| "How does this affect your day-to-day?" | Personal stake |
| "What would it mean for you if this was solved?" | Champion motivation |
| "Is this something your leadership is asking about?" | Political context |

---

## Quick Qualification Questions

### Basic Qualification (Ask First)

These two questions quickly determine if a lead is worth pursuing:

| Question | What You're Looking For |
|----------|------------------------|
| "Do you have a use case/initiative/project you're looking at MotherDuck for?" | Specific project = qualified. "Just exploring" = nurture. |
| "Is it for internal use, or for your clients?" | Internal = standard path. Client-facing = may need different approach. |

### Advanced Qualification (Dig Deeper)

Once basic qualification is confirmed, go deeper:

#### Architecture & Data Questions
| Question | Why It Matters |
|----------|----------------|
| "Please describe your specific project/use case/architecture" | Understand technical fit |
| "What is your data size/shape?" | Sizing and pricing implications |
| "Is your use case internal or external (customer-facing)?" | Different requirements and urgency |

#### For Internal Use Cases
| Question | What to Listen For |
|----------|-------------------|
| "What is your frequency of ingestion?" | Streaming, batch daily, batch weekly |
| "How often do you need data refreshed?" | Real-time needs vs. batch is fine |

#### For External/Customer-Facing Use Cases
| Question | What to Listen For |
|----------|-------------------|
| "Roughly speaking, how many customers do you have?" | Scale and concurrency needs |
| "How many data pipelines/dbt models do you have?" | Complexity indicator |
| "What is the frequency of consumption?" | Usage patterns |
| "How many users / what's the max concurrency?" | Infrastructure requirements |

#### Data Sources
| Question | Why It Matters |
|----------|----------------|
| "What are your data sources?" | Integration complexity |
| Common sources: Postgres, Salesforce, Stripe, S3, etc. | |

---

## BANT Qualification Questions

Confirm BANT before booking next steps.

### Budget
| Question | What to Listen For |
|----------|-------------------|
| "Is there budget allocated for data infrastructure this year?" | "Yes" or "We'd need to find it" |
| "What's the typical process for a purchase like this?" | Complexity indicator |
| "Have you evaluated other solutions recently?" | Active buying process |

### Authority
| Question | What to Listen For |
|----------|-------------------|
| "Who else would be involved in a decision like this?" | Stakeholder map |
| "What's [CTO/VP Data]'s involvement in tooling decisions?" | Decision maker access |
| "If you loved this, what would need to happen next?" | Buying process |

### Need (Already covered in pain questions)

### Timeline
| Question | What to Listen For |
|----------|-------------------|
| "When are you looking to make a change?" | Urgency |
| "Is there a specific date or event driving this?" | Hard deadlines |
| "What happens if you don't solve this by [date]?" | Consequences |

---

## Red Flag Questions

Ask these to disqualify early if needed.

| Question | Red Flag Answer |
|----------|-----------------|
| "What prompted you to take this call?" | "Just researching" / "My boss told me to" |
| "Is this a priority for the next quarter?" | "Not really" / "Maybe next year" |
| "Do you have the authority to make a change here?" | "I'd have no influence" |

---

## Closing the Discovery Call

### Summarize What You Heard
```
"Let me make sure I understood correctly. You're currently on 
[Snowflake], spending about [X], and your main frustrations are 
[slow queries / high costs / complexity]. Ideally, you'd want 
[faster iteration / lower costs / simpler ops]. Did I get that right?"
```

### Bridge to Next Step
```
"Based on what you've shared, I think there's a really good fit here. 
The best next step would be a technical demo with one of our solutions 
engineers who can show you exactly how MotherDuck would work with 
your setup. 

Do you have 45 minutes next [Tuesday/Wednesday]? And should we 
include anyone else from your team?"
```

### If Not Qualified
```
"Thanks for sharing all of that. To be honest, based on what you've 
described, I'm not sure MotherDuck is the right fit right now 
[because X]. But I'd love to stay in touch—can I check back in 
[timeframe] when [conditions change]?"
```

---

## Discovery Call Notes Template

After every call, log:

```
**Company**: 
**Contact**: 
**Role**: 
**Date**: 

**Current State**:
- Warehouse: 
- Team size: 
- Data volume: 
- Key tools: 

**Pain Points**:
1. 
2. 
3. 

**Impact**:
- Business: 
- Personal: 

**BANT**:
- Budget: Y/N/Unknown
- Authority: Decision maker / Influencer / User
- Need: High / Medium / Low
- Timeline: 

**Next Steps**:
- 
- 

**Notes for AE**:
```
