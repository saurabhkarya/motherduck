# Objection Quick Reference
**Scan during calls. Accept first, then pivot.**

---

## Timing

| They Say | You Say |
|----------|---------|
| "Not looking right now" | "Most aren't. Just want to see if testing your setup would be useful or a waste of time?" |
| "It's too early" | "Fair - what would 'ready' look like?" |
| "Check back next quarter" | "What's changing next quarter that makes it relevant?" |
| "Just signed a contract" | "When does it renew? Want me to follow up a few months before?" |
| "I'm busy" | "That's why I called instead of emailed. Better time this week?" |

---

## Status Quo

| They Say | You Say |
|----------|---------|
| "We use Snowflake" | "Not suggesting you rip it out. Any queries you avoid because of cost?" |
| "We use BigQuery" | "Our founders built BigQuery. We made something faster and simpler for smaller data." |
| "We use Databricks" | "Great for ML. Is your use case mostly ML or analytics?" |
| "Postgres is fine" | "Usually is - until analytics competes with production. A risk yet?" |
| "Already have something" | "Quick sanity check for incremental lift. Crazy to take a look?" |
| "Works fine" | "What's the annoying part - even if small?" |
| "No problems" | "What's the annoying part?" |

---

## Effort

| They Say | You Say |
|----------|---------|
| "Migration sounds painful" | "Teams run us alongside - no big migration, just a parallel test." |
| "Don't have time" | "That's why MotherDuck - serverless, nothing to manage. Running queries in an hour." |
| "We don't have budget" | "Free tier has 10GB and 10 compute hours. Worth exploring?" |
| "Too expensive" | "Compared to what? We're typically 70% cheaper than Snowflake." |

---

## Interest

| They Say | You Say |
|----------|---------|
| "Just send me info" | "What specifically - pricing, technical docs, customer stories? I'll send and follow up." |
| "We don't need this" | "Goal is to confirm if there's any lift you're missing. If not, you'll know fast." |
| "Not interested" | "Before I let you go - what would need to change for this to be worth revisiting?" |

---

## Trust

| They Say | You Say |
|----------|---------|
| "Never heard of you" | "Founded by the BigQuery team. Backed by a16z. Best proof is trying it - free tier." |
| "Security certs?" | "SOC 2 Type II, GDPR verified, HIPAA BAAs available." |
| "We need HIPAA" | "BAA available on Business Plan ($100/mo). Want to connect with security team?" |
| "Is it production-ready?" | "SOC 2 Type II. [Customers] run production on us. What concerns can I address?" |

---

## Technical

| They Say | You Say |
|----------|---------|
| "Data is too big" | "How much? GB-TB is our sweet spot. Petabytes might need something else." |
| "Data is too small" | "Perfect - no minimums, pay only for what you use." |
| "No data team" | "Serverless - no ops needed. If you can SQL, you can use it." |

---

## Competitor Specifics

### Snowflake
- "How much do you pay when no one's querying?"
- "Who's responsible for warehouse sizing?"
- "What happens when someone leaves a warehouse running?"

### BigQuery
- "How predictable are your costs month-to-month?"
- "How do you test queries locally?"
- "Ever been surprised by a BigQuery bill?"

### Databricks
- "How long for a simple ad-hoc query?"
- "Do you need Spark for analytics?"
- "What % is ML vs analytics?"

### ClickHouse
- "We handle joins better, standard SQL, more cost-efficient."
- "What's your timeline on deciding?"

---

## Hard Stops

If nothing works:
```
"Totally fair - what would need to change for this to become
painful enough to revisit?"

"If that starts happening, would it be useful to already know
what options exist?"
```

---

## The Close

```
"Rather than explaining over a quick call, next step would be
a 20-min call with one of our executives to see if this is
relevant for your team. Make sense?"
```

```
"Are you in front of your laptop? Just sent a calendar invite -
let me know if you got it and I'll lock you in."
```
