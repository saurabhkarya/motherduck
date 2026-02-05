# /call-prep - Generate Call Prep Document

<command-name>call-prep</command-name>

## Description
Generate a personalized call prep document for a prospect based on their LinkedIn profile and the MotherDuck BDR Playbook.

## Usage
```
/call-prep [LinkedIn URL or paste LinkedIn profile content]
```

## Examples
```
/call-prep https://linkedin.com/in/shannonmcgill
/call-prep Shannon McGill, Data Engineering Consultant at Full Stack Data Solutions
```

## Instructions

When the user invokes `/call-prep`, follow this workflow:

### Step 1: Get Prospect Information

If a LinkedIn URL is provided:
1. Use browser automation (`mcp__claude-in-chrome__*` tools) to navigate to the profile
2. Use `mcp__claude-in-chrome__read_page` or `mcp__claude-in-chrome__get_page_text` to extract profile data
3. If browser automation fails, ask user to paste the LinkedIn profile content

If profile content is pasted directly, parse it for:
- Name
- Title
- Company
- Location
- Experience (especially data/analytics roles)
- Skills (especially: Snowflake, BigQuery, Databricks, DuckDB, data engineering)
- Recent activity/posts
- Education
- Any AI/ML mentions

### Step 2: Read the Playbook Files

Read these files to inform the call prep:

1. **Calls Playbook** (patterns & talk tracks):
   ```
   /Users/arya/Desktop/Arya/.archive/motherduck-playbook/BDR Playbook/Calls/Calls_Playbook.md
   ```

2. **Cold Call Framework** (objection handling):
   ```
   /Users/arya/Desktop/Arya/.archive/motherduck-playbook/BDR Playbook/03_Outbound_Prospecting/04_Cold_Call_Framework.md
   ```

3. **Competitive Intel** (if they use a competitor):
   - Snowflake: `/Users/arya/Desktop/Arya/.archive/motherduck-playbook/BDR Playbook/06_Competitive_Intel/01_vs_Snowflake.md`
   - Databricks: `/Users/arya/Desktop/Arya/.archive/motherduck-playbook/BDR Playbook/06_Competitive_Intel/02_vs_Databricks.md`
   - BigQuery: `/Users/arya/Desktop/Arya/.archive/motherduck-playbook/BDR Playbook/06_Competitive_Intel/03_vs_BigQuery.md`

### Step 3: Identify Key Signals

Look for these HIGH-PRIORITY signals:
- **Consultant/Agency** = Multiplier effect (can bring to multiple clients)
- **Snowflake/BigQuery/Databricks experience** = Competitor angle, cost savings pitch
- **Cost optimization mentions** = Lead with 70% savings
- **AI/ML work** = Pitch MCP server, PROMPT QUERY
- **Small team/startup** = Simplicity angle
- **Data volumes (GB-TB)** = Sweet spot confirmation

Look for these POTENTIAL DQ signals:
- Student/teacher/academic
- Personal project mentions
- Very large enterprise (petabyte scale)
- Deep competitor investment (multi-year contracts)

### Step 4: Generate the Call Prep Document

Use the template at:
```
/Users/arya/Desktop/Arya/Call Prep/TEMPLATE_Call_Prep.md
```

Save the output to:
```
/Users/arya/Desktop/Arya/Call Prep/[FirstName]_[LastName]_[Company].md
```

### Step 5: Summarize for User

After creating the document, provide a brief summary:
- Top 3 angles to use
- Recommended opening line
- Key discovery questions
- Potential objections to prepare for
- File location

## Key Playbook Patterns to Apply

### Opening Approaches (pick based on profile)
1. **Trigger-based** - If they signed up/downloaded something
2. **Cost angle** - If they mention Snowflake cost optimization
3. **Consultant angle** - If they're a consultant/agency
4. **AI angle** - If they're building AI products

### Discovery Framework (5 Questions)
1. What are you working on?
2. What are you using now?
3. Why is it not working?
4. What happens if it doesn't get fixed?
5. Why are you exploring MotherDuck?

### Value Props by Persona
| Persona | Lead With |
|---------|-----------|
| Analyst | Fast queries, no noisy neighbors |
| Engineer | Zero infrastructure, isolation |
| Product | Sub-second latency, predictable |
| CTO | Simpler architecture, 70% cost savings |
| Consultant | Hero with clients, multiplier |

### Meeting Ask Formula
```
"Would it make sense to have one of our Solutions Architects
[specific value]? They're technical—not salesy.
How's [specific day] look?"
```
