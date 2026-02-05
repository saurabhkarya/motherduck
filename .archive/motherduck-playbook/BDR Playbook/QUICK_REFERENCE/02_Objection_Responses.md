# Objection Responses - Quick Reference

*ACE Framework: Acknowledge → Clarify → Explore*

---

## Competitor Objections

### "We already use Snowflake"
```
"Snowflake is solid—a lot of our customers came from Snowflake.
How's it working for you? Any pain points around cost or complexity?"

[If cost concern] → "That's the main reason companies switch.
We're typically 70% cheaper—no idle compute costs."

[If happy] → "Great. If costs ever become a concern, let's reconnect."
```

### "We're looking at Databricks"
```
"Databricks is great for heavy ML. Are you doing mostly ML/AI,
or more analytics and BI?"

[If analytics] → "For analytics, we're simpler and more cost-effective."
[If ML-focused] → "For ML, Databricks might fit. Many use us alongside for analytics."
```

### "BigQuery is included with GCP"
```
"GCP integration is convenient. How's the BigQuery experience been?"

→ "We benchmark 4x faster than BigQuery. Plus hybrid execution means
you can use local compute for dev work—BigQuery can't do that."
```

---

## Cost & Budget Objections

### "We don't have budget"
```
"Understood. Is data infrastructure on your roadmap at all?"

[If yes] → "Free tier gives you 10GB to test and build a business case."
[If no] → "When might this become a priority? I can check back then."
```

### "It's too expensive"
```
"What are you comparing it to?"

→ "Compared to Snowflake or Databricks, we're typically 70% cheaper.
Most startups spend $50-200/month. What's your budget range?"
```

### "Free tier is all we need"
```
"Free tier is great for getting started. What use cases are you running?"

→ "As you grow, you'll want more compute and team features.
Lite plan is pay-as-you-go—natural next step."
```

---

## Technical & Fit Objections

### "Is it production-ready?"
```
"Fair question. What does 'production-ready' mean for you—uptime? Compliance? Scale?"

→ "We're SOC 2 Type II compliant, HIPAA BAAs available, and
companies like [X] run production on us. What specific concerns?"
```

### "Our data is too big"
```
"How much data are we talking about?"

[<10TB] → "That's our sweet spot. MotherDuck handles GB to low TB really well."
[Petabytes] → "For petabyte-scale, you might need different architecture.
Many use us for specific use cases alongside main warehouse."
```

### "Our data is too small"
```
"What's 'too small'?"

→ "We're perfect for smaller datasets. No minimum spend, pay for what you use.
Free tier might be all you need."
```

### "We don't have a data team"
```
"Who handles data today—founders? Engineers?"

→ "MotherDuck is serverless—no ops required. If you can write SQL, you can use it.
Plus PROMPT QUERY lets you ask questions in plain English."
```

---

## Timing Objections

### "We're not ready yet"
```
"What would need to change for this to become a priority?"

[Specific trigger] → "Got it. Can I reach back out around [that time]?"
[Vague] → "What are you prioritizing instead right now?"
```

### "We just signed with [competitor]"
```
"Understood. When does that come up for renewal?"

→ "Would it help to reconnect a few months before then?
You'd have options when the time comes."
```

### "Check back next quarter"
```
"Happy to. What's changing next quarter that would make this more relevant?"

[Real reason] → "Perfect, I'll reach out in [month]. Anything I can send meanwhile?"
[Vague] → "Just so I'm prepared—what would you want to discuss when we reconnect?"
```

---

## Trust & Relationship Objections

### "I've never heard of MotherDuck"
```
"We're newer than Snowflake, for sure."

→ "MotherDuck was founded by the BigQuery team, with leaders from
Snowflake and Databricks. Backed by a16z, Redpoint.
Best proof is trying it—free tier is risk-free."
```

### "Can you send me some information?"
```
"Absolutely. What specifically—pricing? Technical docs? Customer stories?"

→ "I'll send that. Would a quick call to walk through it together
make sense? Sometimes faster than reading docs."
```

### "We need to talk to more vendors"
```
"Makes sense. Who else are you looking at?"

→ "We're often compared to [X]. Want me to send our comparison guides?"
```

---

## Security & Compliance Objections

### "What certifications do you have?"
```
"SOC 2 Type II certified—gold standard for cloud security.
GDPR verified. HIPAA BAAs available.

For Business Plan, we share full SOC 2 report and support security questionnaires."
```

### "We need HIPAA compliance"
```
"We support HIPAA through BAAs on Business Plan—$100/month plus usage.

Should I connect you with our security team for the BAA process?"
```

### "We have EU customers / need GDPR"
```
"We're GDPR verified. EU data region in Frankfurt—your EU data stays in Europe.
We also provide DPAs.

Want me to send the DPA for your legal team?"
```

### "Our security team needs to review"
```
"Absolutely. We can provide:
• SOC 2 Type II report
• Data Processing Agreement
• Security questionnaire responses

Most security teams complete review in 1-2 weeks. Want me to start that?"
```

---

## AI Feature Objections

### "We don't need AI features"
```
"Fair enough—the AI is optional. The core value is speed and cost savings.

That said, PROMPT QUERY can help non-technical team members
access data without learning SQL. Might be useful down the road."
```

### "How does your AI compare to [X]?"
```
"We built our own text-to-SQL model called DuckDB-NSQL—7 billion parameters,
specifically trained on DuckDB syntax. So it handles our SQL dialect correctly.

Plus our MCP server lets Claude or Cursor connect directly to your database."
```

---

## One-Line Quick Responses

| Objection | Quick Response |
|-----------|----------------|
| "We use Snowflake" | "What would need to change? Many switch for 70% savings." |
| "No budget" | "Free tier has 10GB—want the link?" |
| "Too expensive" | "Compared to what? 70% cheaper than Snowflake." |
| "Not ready" | "What would make this a priority?" |
| "Never heard of you" | "BigQuery team, a16z-backed. Free to try." |
| "Send info" | "What specifically? Let's do a quick walkthrough." |
| "Talking to others" | "Who else? I can send comparison docs." |
| "Too small" | "No minimums. Pay only for what you use." |
| "What certifications?" | "SOC 2 Type II, GDPR, HIPAA BAA available." |
| "Need HIPAA" | "BAA available on Business Plan." |

---

---

## Quick Links: Related Resources

### By Objection Type
| Objection Category | Battlecard / Deep Dive |
|--------------------|------------------------|
| Snowflake | [vs. Snowflake Battlecard](../06_Competitive_Intel/01_vs_Snowflake.md) |
| Databricks | [vs. Databricks Battlecard](../06_Competitive_Intel/02_vs_Databricks.md) |
| BigQuery | [vs. BigQuery Battlecard](../06_Competitive_Intel/03_vs_BigQuery.md) |
| Security/Compliance | [Security Features](../08_Reference_Materials/Compliance/04_Security_Features.md) |
| HIPAA | [HIPAA Explained](../08_Reference_Materials/Compliance/03_HIPAA_Explained.md) |
| SOC 2 | [SOC 2 Explained](../08_Reference_Materials/Compliance/01_SOC2_Type_II_Explained.md) |

### Pain Points → Objections Map
| If They Say... | They're Really Concerned About... | Use This |
|----------------|-----------------------------------|----------|
| "We use Snowflake" | Switching costs, investment | [Competitor section](#competitor-objections) |
| "No budget" | Not a priority | [Budget section](#cost--budget-objections) |
| "Not ready yet" | Vague objection, lower priority | [Timing section](#timing-objections) |
| "Is it production-ready?" | Risk, maturity | [Technical section](#technical--fit-objections) |
| "Never heard of you" | Trust, credibility | [Trust section](#trust--relationship-objections) |

### Discovery & Call Structure
- [Master Discovery Framework](../Calls/Calls_Playbook.md#master-discovery-framework) - Full call flow
- [Discovery Questions](./03_Discovery_Questions.md) - What to ask
- [Calls Playbook](../Calls/Calls_Playbook.md) - Real call patterns

### Full Guides
- [Full Objection Guide (ACE Framework)](../05_Objection_Handling/01_Common_Objections.md)
- [Competitive Battlecards](../06_Competitive_Intel/)
