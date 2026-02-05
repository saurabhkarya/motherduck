# Postgres Pain
**When they mention: "Running analytics on Postgres"**

---

## Identify the Risk
```
"How do you make sure analytics doesn't slow down production workloads?"

Has there ever been an incident where a heavy query impacted the app?
Are you using read replicas or query limits to manage this?
```

---

## Impact Framing
The result of analytics on Postgres:
- Read replicas needed
- Query limits imposed
- Performance scares
- Production incidents

**Reframe:**
```
"Postgres is great at transactions - analytics is just a different job."
```

---

## The Solution
```
"It might be worth separating analytics from production so heavy
queries don't compete with live traffic."
```

**What MotherDuck does:**
```
"Offload analytics off Postgres into an engine designed for analytics."
```

**What it changes:**
- Production stays fast → analytics run faster → fewer incidents

---

## Technical Question They Might Ask
**"How do I stream Postgres data into MotherDuck?"**

Two phases:
1. **Initial Load:** Snapshot your Postgres, load into local DuckDB, push to MotherDuck
2. **Ongoing Sync:** CDC streaming with Estuary - captures changes real-time

→ [[09-Reference/Technical Questions#Postgres Streaming]]

---

## When Ready to Close
→ [[08-Close/Standard Close]]
