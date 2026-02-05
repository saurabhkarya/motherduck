       # Call Playbook - Start Here
**Goal: Book a meeting with AE/CE**

---

## Before Your First Call
→ [[00-Start/Core Principles]] - **READ THIS FIRST. The golden rules from Scott.**

---

## The Framework (From Real Calls)
→ [[Call Framework]] - **Based on 35 analyzed calls**

---

## Call Flow Overview
```
SURVIVE PICKUP → GIVE & GET → FIND THE HOOK → BOOK THE MEETING
```

**Remember:**
- Go undetected (relaxed, casual, not salesy)
- Give → Leave open → Ask (never yes/no questions)
- Don't pitch until you know their situation
- Find your hook → Book the meeting

---

## Quick Navigation

### 1. Opening the Call
→ [[01-Opening/Inbound Opening]] - For leads who signed up / downloaded
→ [[01-Opening/Cold Outbound Opening]] - For cold calls

### 2. Discovery - Find the Hook
→ [[02-Discovery/The Big Question]] - Give and get framework

### 3. Pick a Pain or Use Case (Listen for signals)

**Pain Points:**

| They Say                                | Go To                                |
| --------------------------------------- | ------------------------------------ |
| "It's expensive" / "Costs growing"      | [[03-Pain-Points/Cost Pain]]         |
| "It's slow" / "Queries take forever"    | [[03-Pain-Points/Speed Pain]]        |
| "It's complex" / "Too many parts"       | [[03-Pain-Points/Complexity Pain]]   |
| "Just exploring options"                | [[03-Pain-Points/Exploring Options]] |
| "Running on Postgres"                   | [[03-Pain-Points/Postgres Pain]]     |
| "Team can't write SQL" / "Using Claude" | [[03-Pain-Points/AI Pain]]           |

**Use Cases (Home Field Advantage):**
| They Say | Go To |
|----------|-------|
| Customer dashboards / embedded analytics / multi-tenant | [[03-Pain-Points/External Facing]] |
| Using Cursor / Claude / MCP / AI-first | [[03-Pain-Points/Agentic Workflows]] |
| Gold tier / serving layer / data products | [[03-Pain-Points/External Facing]] |
| Concurrency / lots of users hitting reports | [[03-Pain-Points/External Facing]] |

### 4. Handle Objections
→ [[05-Objections/Objection Quick Reference]] - Judo moves & comebacks

### 5. Competitor Handling
→ [[06-Competitors/Snowflake]] - 70% cost savings, gold tier, external
→ [[06-Competitors/BigQuery]] - Founded by BQ team, 4x faster
→ [[06-Competitors/Databricks]] - 95% don't need Spark
→ [[06-Competitors/ClickHouse]] - Joins suck, tuning tax
→ [[06-Competitors/Postgres]] - OLTP ≠ OLAP, 10-100x faster
→ [[06-Competitors/Redshift]] - 2012 tech, cluster waste

### 6. Close the Call
→ [[07-Pre-Close/Cost Pre-Close]] - After cost discovery
→ [[07-Pre-Close/Speed Pre-Close]] - After speed discovery
→ [[08-Close/Standard Close]] - Default close
→ [[08-Close/Cost Close]] - For cost-focused prospects
→ [[08-Close/Competitor Close]] - When comparing alternatives

---

## Reference Materials
→ [[09-Reference/Technical Questions]] - **Includes Single Node explanation**
→ [[09-Reference/Pivot Guide]] - How to redirect conversations
→ [[09-Reference/Pricing Walk-through]] - Pricing breakdown
→ [[09-Reference/Why Meet]] - Selling the meeting value
→ [[09-Reference/Cold Call Framework]] - Comprehensive call framework

---

## The MotherDuck Elevator Pitch

**When they ask "What is MotherDuck?"**
```
"MotherDuck is a cloud data warehouse built on top of DuckDB.

We have a very unique architecture which offers people a lot of
performance gains and cost controls compared to traditional alternatives -
and opens up some other use cases too."

[STOP. Let them ask.]
```

---

## Finding Your Hook

| Company Type | Likely Hook |
|--------------|-------------|
| Startup / SMB | Cost (they feel bad spending on Snowflake) |
| Enterprise with external apps | External-facing analytics, concurrency |
| AI-first / Cursor users | Agentic / MCP |
| Data products team | Gold tier / serving layer |
| Happy with Snowflake on cost | External, agentic, serving layer |

---

## Notepad Reminders (Tape to Monitor)

- [ ] No yes/no questions
- [ ] Give → Leave open → Ask
- [ ] Don't pitch until you know their situation
- [ ] Where's my hook?
- [ ] Single node = each query gets isolated compute
- [ ] Book the meeting, don't over-close

---

## Customer Examples
→ [[Library/]] - Real customer scenarios (Arity, Final.co.il)

---

← Back to [[README|Main Playbook]]
