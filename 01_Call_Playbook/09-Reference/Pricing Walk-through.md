# Pricing Walk-through
**Use when they ask about pricing**

---

## Three Components

### 1. Platform Fee
- **Lite Plan:** $25/month base
- **Business Plan:** $100/month (includes read scaling for customer-facing dashboards)

### 2. Storage
- $0.08 per GB per month
- Example: 800GB = ~$64/month

### 3. Compute
- Standard instances: $1.44/hour of **uptime** (not per query)
- Spin up/cool down is fast due to single-node architecture

---

## Example Calculation
For a team with ~800GB and 10-15 analysts:

| Component | Cost |
|-----------|------|
| Platform (Lite) | $25/month |
| Storage (800GB) | ~$64/month |
| Compute (~50-60 hrs/month) | ~$72-86/month |
| **Total** | **~$160-175/month** |

---

## The Comparison
```
"That's a 95% reduction from $3-5K on [competitor]."

"And that's being conservative."
```

---

## Why We're Cheaper
```
"Two reasons:"

"1. We charge by compute time, not data scanned. So exploratory analysis
   doesn't rack up cost."

"2. We don't want you making business decisions based on warehouse cost.
   Analysts can run as many queries as they need without worrying."
```

---

## Pivot to Close
```
"Let me get you in front of someone who can give you exact numbers
for your use case."
```

→ [[08-Close/Cost Close]]
