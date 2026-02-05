# Discovery Questions - Quick Reference

*Ask in order. Listen more than you talk. Take notes.*

---

## The 5 Questions (Hit These Every Call)

```
1. What are you working on?
2. What are you using now?
3. Why is it not working?
4. What happens if it doesn't get fixed?
5. Why are you exploring MotherDuck?
```

| # | Question | What You're Getting |
|---|----------|---------------------|
| 1 | **What are you working on?** | Project context |
| 2 | **What are you using now?** | Tech stack |
| 3 | **Why is it not working?** | Level 1 Pain |
| 4 | **What happens if it doesn't get fixed?** | Level 2 Pain (stakes) |
| 5 | **Why are you exploring MotherDuck?** | Motivation + urgency |

**If you haven't asked all 5, you're not done with discovery.**

---

## Phase 1: Opening (30 seconds)

**Trigger-Based Opening** (they signed up, downloaded something):
```
"Hey [Name], it's [Your name] at MotherDuck. I saw you signed up recently—
how's it going?"

[Wait for response]

"What have you been working on?"
```

**Cold Opening** (outbound):
```
"Hey [Name], this is [Your name] from MotherDuck. We help data teams
run analytics faster and cheaper. Caught you at a bad time?"
```

---

## Phase 2: Qualification (2-3 minutes)

### Business vs Personal (Ask Early!)
```
"Is this for a company project or personal exploration?"
```

If personal → DQ politely, offer free tier/community resources

### Current State
```
"What are you using for your data warehouse today?"
"How's that working for you?"
"Any frustrations with [current tool]?"
```

### Pain Discovery
```
"Was it more for performance or cost that you started looking?"
"What's the biggest challenge with your current setup?"
"What happens if you don't solve this?"
```

---

## Phase 3: Sizing & Fit (1-2 minutes)

### Data Volume
```
"Do you know what your data volume is like?"
```

| Answer | Response |
|--------|----------|
| "A few GB" | "Perfect for our free tier to start." |
| "Hundreds of GB" | "Sweet spot—that's exactly what we're built for." |
| "A few TB" | "Great fit. That's our target range." |
| "Petabytes" | Probe more—may be DQ or specific use case fit |

### Team & Users
```
"How many people would be querying this?"
"Do you have non-technical users who need data access?"
```

If non-technical users → mention PROMPT QUERY

---

## Phase 4: Decision Process (1-2 minutes)

### Authority
```
"Who else would be involved in evaluating something like this?"
"Is this your decision to make, or would others need to sign off?"
```

### Timeline
```
"When are you looking to have something in place?"
"What's driving that timeline?"
```

### Budget
```
"Is there budget allocated for data infrastructure?"
"What's the budget range you're working with?"
```

---

## Phase 5: Next Steps (30 seconds)

### If Qualified
```
"Based on what you've told me, I think there's a good fit here.
Would it make sense to do a quick 15-minute demo?"

"We also offer sessions with our Solutions Architect to help
optimize your setup—would that be helpful?"
```

### If Not Qualified
```
"Sounds like the free tier might be perfect for now.
Want me to send you the link?"

"I'll check back in [X months] when timing is better.
Sound good?"
```

---

## AI/MCP Discovery Questions

Use when prospect mentions small team, AI tools, or SQL complexity:

```
"Do you have non-technical people who need access to data?"
→ Mention PROMPT QUERY

"Are you using AI tools like Claude or Cursor for development?"
→ Mention MCP server

"How SQL-savvy is your team?"
→ If low, mention AI features
```

---

## Hesitation Detection

When they sound uncertain, probe:
```
"You tempered that with 'he said'... I think you're not
convinced yet?"

"It sounds like there might be some concerns—what's
holding you back?"

"What would need to be true for this to be a no-brainer?"
```

---

## DQ Questions (Ask Early to Save Time)

```
"Is this for a company use case or personal exploration?"
"Do you work in data now?"
"Who would be using this at your organization?"
"What's the business problem you're trying to solve?"
```

### DQ Signals to Listen For

| Signal | Action |
|--------|--------|
| "Personal project" | DQ, offer free tier |
| "Student" / "Teacher" | DQ, offer docs/community |
| "Just exploring" | Probe for business use case |
| "No business need" | DQ, nurture list |
| "Petabytes of data" | May be DQ, probe specific use case |

---

## Question Flow Cheat Sheet

```
1. Opening → "What have you been working on?"
        ↓
2. Qualify → "Is this for work or personal?"
        ↓ (if work)
3. Current State → "What do you use today?"
        ↓
4. Pain → "Any frustrations with that?"
        ↓
5. Sizing → "What's your data volume?"
        ↓
6. Decision → "Who else is involved?"
        ↓
7. Timeline → "When do you need this?"
        ↓
8. Next Steps → Book meeting or nurture
```

---

## Post-Call Notes Template

```
Contact: [Name]
Company: [Company]
Date: [Date]
Duration: [X] min

Current State:
- Using: [current tool]
- Data volume: [X GB/TB]
- Team size: [X people]

Pain Points:
- [pain 1]
- [pain 2]

Decision Process:
- Authority: [who decides]
- Timeline: [when]
- Budget: [Y/N, amount]

Next Steps:
- [ ] [specific action]
- [ ] [follow-up date]

Notes:
[Additional context]
```

---

---

## Quick Links: Objections & Pains

### Common Pains to Uncover

| Pain Signal | Follow-Up Question | If Confirmed, Say... |
|-------------|-------------------|----------------------|
| "Queries are slow" | "What kind of latency are you seeing?" | "We benchmark 4x faster than BigQuery" |
| "Too expensive" | "What are you spending today?" | "Customers see 70% savings vs Snowflake" |
| "Complex setup" | "How much time goes into maintenance?" | "MotherDuck is serverless—zero ops" |
| "Team can't SQL" | "Who needs data access?" | "PROMPT QUERY lets you ask in English" |
| "Noisy neighbors" | "Do queries slow down when others run?" | "Each user gets isolated compute" |
| "Customer-facing latency" | "What's acceptable response time?" | "Sub-100ms cold starts, predictable" |

### When Objections Come Up During Discovery

| Objection | Quick Response | Deep Dive |
|-----------|----------------|-----------|
| "We use Snowflake" | "How's that working? Any cost/complexity pain?" | [Objection Responses](./02_Objection_Responses.md#competitor-objections) |
| "No budget" | "Free tier has 10GB—enough to test" | [Objection Responses](./02_Objection_Responses.md#cost--budget-objections) |
| "Not ready" | "What would make this a priority?" | [Objection Responses](./02_Objection_Responses.md#timing-objections) |
| "Too early" | "We partner early to get architecture right" | [Master Discovery](../Calls/Calls_Playbook.md#6-common-objections-during-discovery) |

### Related Resources
- [Master Discovery Framework](../Calls/Calls_Playbook.md#master-discovery-framework) - Full call structure with Level 1 & 2 pain discovery
- [Objection Responses](./02_Objection_Responses.md) - Quick objection handling
- [Calls Playbook](../Calls/Calls_Playbook.md) - Patterns from real calls
- [Full Discovery Guide](../04_Inbound_Qualification/01_Discovery_Questions.md) - Complete discovery framework
