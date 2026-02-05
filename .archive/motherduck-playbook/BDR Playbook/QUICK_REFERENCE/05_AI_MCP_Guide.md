# AI & MCP Features - Quick Reference

*MotherDuck's AI capabilities are a competitive differentiator. Know when to mention them.*

---

## AI Features Overview

| Feature | What It Does | When to Mention |
|---------|--------------|-----------------|
| **PROMPT QUERY** | Natural language → SQL | Small team, non-SQL users |
| **AI FixIt** | Auto-corrects SQL errors | SQL complexity frustration |
| **AI Edit** | Edit queries with plain English | Analysts, business users |
| **MCP Server** | Connect AI tools to database | Uses Claude/Cursor/Windsurf |
| **DuckDB-NSQL** | Our text-to-SQL model | Technical prospects, AI-first companies |

---

## Talk Tracks by Situation

### Small Team / No SQL Expertise
```
"We have something called PROMPT QUERY—you literally type a
question in plain English like 'What were my top 10 customers
last month?' and it writes the SQL for you. So you don't need
SQL experts on the team to get answers."
```

### Prospect Uses AI Tools (Claude, Cursor, etc.)
```
"Oh nice—we have an MCP server that connects those tools
directly to your database. So you could ask Claude questions
about your data and it can query MotherDuck directly.
Pretty cool for AI-first workflows."
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

### Competitor Differentiation
```
"Unlike generic AI that struggles with SQL dialects, we
built our own text-to-SQL model called DuckDB-NSQL. It's
specifically trained on DuckDB syntax, so it handles our
SQL features correctly. Open source on Ollama too."
```

---

## Discovery Questions for AI Needs

```
"Do you have non-technical people who need access to data?"
→ If yes, mention PROMPT QUERY

"Are you using AI tools like Claude or Cursor for development?"
→ If yes, mention MCP server

"How SQL-savvy is your team?"
→ If low, highlight AI features

"How do you handle data questions from non-technical stakeholders?"
→ If manual, position PROMPT QUERY as solution
```

---

## MCP Server Details

**What it is:** Model Context Protocol server that connects AI assistants to MotherDuck

**Remote server:** `api.motherduck.com/mcp` (launched Dec 2025)

**Works with:**
- Claude (Anthropic)
- Cursor
- Windsurf
- Zed
- Any MCP-compatible client

**What users can do:**
- Ask natural language questions about their data
- Explore database schemas
- Run SQL queries
- All from within their AI tool

**Configuration:**
```json
{
  "mcpServers": {
    "motherduck": {
      "url": "https://api.motherduck.com/mcp"
    }
  }
}
```

---

## DuckDB-NSQL Model

**What it is:** 7B parameter text-to-SQL model

**Built by:** MotherDuck + Numbers Station

**Key differentiator:** Fine-tuned on 200,000+ DuckDB-specific text-to-SQL pairs (not generic SQL)

**Available on:** Ollama for local deployment

**Why it matters:** Generic AI models struggle with DuckDB-specific syntax. Ours handles it correctly.

---

## Built-in AI Functions

| Function | What It Does |
|----------|--------------|
| `PROMPT QUERY 'question'` | Generates and runs SQL from English |
| `prompt_sql('description')` | Returns SQL without running |
| `prompt_fixup('broken SQL')` | Fixes SQL syntax errors |
| `prompt_explain('query')` | Explains what a query does |
| `prompt_schema('table')` | Describes database structure |

**Example:**
```sql
PROMPT QUERY 'Show me total revenue by product for last quarter'
-- AI generates the SQL and runs it
```

---

## Competitive Positioning

### vs. Snowflake AI
```
"Snowflake has Cortex, but it's add-on pricing. Our AI features
are built in—PROMPT QUERY is included on all plans."
```

### vs. BigQuery AI
```
"BigQuery has BQML for ML, but for text-to-SQL and natural
language queries, our PROMPT QUERY is simpler and faster."
```

### vs. Generic ChatGPT/Claude
```
"Generic AI doesn't know your schema or data. Our MCP server
connects directly to your database, so the AI sees your actual
tables and can run real queries."
```

---

## When NOT to Mention AI

- Prospect is highly technical and prefers raw SQL
- They've expressed skepticism about AI hype
- The conversation is already going well without it
- They're focused purely on cost (AI isn't the main value prop)

*Lead with cost/speed/simplicity. AI features are a bonus.*

---

## AI Feature Objections

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

### "How does it compare to [X]?"
```
"We built our own model specifically for DuckDB. Most AI
assistants use generic SQL training, which means they struggle
with DuckDB-specific features. Ours doesn't."
```

---

---

## Quick Links: Objections & Pains

### AI-Related Pains to Uncover

| Pain Signal | Discovery Question | AI Feature to Position |
|-------------|-------------------|------------------------|
| "Team can't write SQL" | "Who needs data access today?" | PROMPT QUERY |
| "SQL errors waste time" | "How much debugging do analysts do?" | AI FixIt |
| "Non-technical stakeholders blocked" | "How do business users get data?" | PROMPT QUERY |
| "Using Claude/Cursor already" | "What AI tools does your team use?" | MCP Server |
| "Data is siloed from AI workflows" | "How do you connect AI to your data?" | MCP Server |

### AI Feature Objections

| Objection | Response | More Info |
|-----------|----------|-----------|
| "We don't need AI" | "It's optional—core value is speed/cost. But PROMPT QUERY helps non-technical users" | [When NOT to mention](#when-not-to-mention-ai) |
| "Is AI accurate?" | "DuckDB-NSQL trained on 200K+ examples, not generic SQL" | [DuckDB-NSQL section](#duckdb-nsql-model) |
| "Generic AI works fine" | "Generic AI doesn't know your schema. MCP connects directly to your data" | [MCP Server section](#mcp-server-details) |

### When AI Features Solve Pain

| Situation | Pain | AI Solution |
|-----------|------|-------------|
| Small team, no data person | Access blocked | PROMPT QUERY |
| Analysts frustrated with SQL | Complexity | AI FixIt, AI Edit |
| Business users need self-serve | Dependency on engineers | PROMPT QUERY |
| Dev team uses AI coding tools | Disconnected workflows | MCP Server |
| Data questions take too long | Slow turnaround | PROMPT QUERY |

### Related Resources
- [Objection Responses](./02_Objection_Responses.md) - General objection handling
- [Master Discovery](../Calls/Calls_Playbook.md#master-discovery-framework) - Full call structure
- [AI Feature Talk Tracks](../Calls/Calls_Playbook.md#ai-feature-talk-tracks) - From real calls
- [Product Overview](../01_Company_Knowledge/01_Product_Overview.md) - Full AI section
- [Technical FAQ](../08_Reference_Materials/Technical/01_Technical_FAQ.md) - AI & MCP FAQs
