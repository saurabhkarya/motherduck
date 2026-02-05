# AI & Non-Technical Access Pain
**When non-SQL users need data access**

---

## Pain Signals

Listen for:
- "Non-technical people need data"
- "Business users wait on analysts"
- "We don't have SQL experts"
- "Our team can't write queries"
- "Data questions pile up"

---

## Discovery Questions

```
"Do you have non-technical people who need access to data?"

"How do business users get answers when they have data questions?"

"How SQL-savvy is your team overall?"

"Are you using AI tools like Claude or Cursor for development?"
```

---

## The Solution: PROMPT QUERY

```
"We have something called PROMPT QUERY—you literally type a
question in plain English like 'What were my top 10 customers
last month?' and it writes the SQL for you. So you don't need
SQL experts on the team to get answers."
```

**Key Points:**
- Natural language → SQL
- No SQL expertise needed
- Built-in, not an add-on
- Works for any data question

---

## For AI-First Teams: MCP Server

```
"Oh nice—we have an MCP server that connects those tools
directly to your database. So you could ask Claude questions
about your data and it can query MotherDuck directly.
Pretty cool for AI-first workflows."
```

**MCP Works With:**
- Claude (Anthropic)
- Cursor
- Windsurf
- Zed
- Any MCP-compatible client

---

## Talk Tracks by Situation

### Small Team / No SQL Expertise
```
"PROMPT QUERY means anyone can ask data questions in plain
English. No SQL training needed. Your team can self-serve
without waiting on analysts."
```

### SQL Frustration / Errors
```
"We have an AI FixIt feature that auto-corrects SQL errors.
So if you make a typo or syntax mistake, it just fixes it
for you. No more debugging missing commas."
```

### Technical Prospect / AI-First Company
```
"One thing that's pretty unique—we launched an MCP server
last year. It's Model Context Protocol, lets AI assistants
like Claude or Cursor connect directly to your MotherDuck
database. Your devs can ask questions in natural language
and the AI queries the data."
```

---

## AI Feature Summary

| Feature | What It Does | Best For |
|---------|--------------|----------|
| PROMPT QUERY | Natural language → SQL | Non-SQL users |
| AI FixIt | Auto-corrects SQL errors | SQL frustration |
| AI Edit | Edit queries with plain English | Quick iterations |
| MCP Server | Connect AI tools to database | AI-first teams |
| DuckDB-NSQL | Our text-to-SQL model | Technical prospects |

---

## When NOT to Mention AI

- Prospect is highly technical and prefers raw SQL
- They've expressed skepticism about AI hype
- The conversation is already going well without it
- They're focused purely on cost (AI isn't the main value prop)

*Lead with cost/speed/simplicity. AI features are a bonus.*

---

## Objection Handling

### "We don't need AI features"
```
"Fair enough—the AI is optional. The core value is speed and
cost savings. That said, PROMPT QUERY can help non-technical
team members access data. Might be useful down the road."
```

### "Is the AI accurate?"
```
"DuckDB-NSQL is specifically trained on DuckDB syntax—not
generic SQL. It's been fine-tuned on 200,000+ examples, so
accuracy is much higher than generic AI for our use case."
```

### "Generic AI works fine for SQL"
```
"Generic AI doesn't know your schema. Our MCP server connects
directly to your database, so the AI sees your actual tables
and can run real queries—not just guessing at structure."
```

---

## Next Steps
→ [[07-Pre-Close/General Pre-Close]]
→ [[08-Close/Standard Close]]
