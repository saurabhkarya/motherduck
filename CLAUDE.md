# CLAUDE.md - MotherDuck BDR Playbook Project

## Current Task: Extract All HubSpot Call Transcripts & Build Calls Playbook

### Goal
Extract all 155+ connected call transcripts from HubSpot and analyze them to build a comprehensive cold calling framework for MotherDuck BDRs.

### What We're Building
1. **Individual transcript files** - Each call saved as a .txt file in `BDR Playbook/Calls/transcripts/`
2. **Calls Playbook** - Pattern analysis document at `BDR Playbook/Calls/Calls_Playbook.md`
3. **Cold Call Framework** - Comprehensive framework at `BDR Playbook/03_Outbound_Prospecting/04_Cold_Call_Framework.md`

### How to Extract Transcripts (Process)

1. **Navigate to HubSpot Connected Calls view:**
   ```
   https://app.hubspot.com/contacts/22616816/objects/0-48/views/59640859/list?prefetch=
   ```

2. **For each call in the list:**
   - Click on the call title link (e.g., "Call with [Name]")
   - Wait for the Recording Review page to load
   - The transcript is displayed in the right panel under the "Transcript" tab
   - Read the page to extract: caller name, company, date, BDR, duration, call notes, summary, and full transcript
   - Save to a .txt file with naming convention: `NNN_FirstName_LastName_Company.txt`

3. **File naming convention:**
   ```
   001_Ally_Mauldin_MarketDial.txt
   002_George_Cosio_Splunk.txt
   003_Guy_Caprioli_BlueSky_DEAL.txt
   004_Sia_Talebi_KappaBar.txt
   ```

4. **After extracting each transcript:**
   - Navigate back to the calls list
   - Continue to the next call
   - There are 7 pages of calls (25 per page, 155 total)

### Key Call Notes to Look For
- **Deals:** Look for calls with associated deals (MarketDial, BlueSky Solutions, Algoseven)
- **DQ signals:** "personal project", "student", "teacher", "too small!", "volume too low"
- **Competitor mentions:** "Using and enjoying Snowflake", etc.
- **Wrong contacts:** "wrong contact @ company"

### Playbook Analysis Categories
- Successful Deal Patterns
- Common Disqualification Signals
- Objection Patterns
- Winning Talk Tracks
- Questions That Convert

### Progress Tracking (22/155 extracted)
- [x] Transcript 001 - Ally Mauldin (MarketDial) - DEAL
- [x] Transcript 002 - George Cosio (Splunk) - DQ (YAPPER)
- [x] Transcript 003 - Guy Caprioli (BlueSky) - DEAL
- [x] Transcript 004 - Sia Talebi (Kappa Bar) - Wrong Contact
- [x] Transcript 005 - Rohit Verma (Netlink Software) - DQ (way too sleepy)
- [x] Transcript 006 - Vinny Costa (Locklear) - DQ (volume too low, side project)
- [x] Transcript 007 - Rajat Chelani (Claritas Rx) - DQ (Using Snowflake, competitor)
- [x] Transcript 008 - Christopher Mohs (Smart Healthy Green Living) - DQ (too small, 2 employees)
- [x] Transcript 009 - Maximilian Schön (Solar Institute) - DQ (too small, 800K rows, DuckDB user)
- [x] Transcript 010 - Joel MacPherson (Uproot Clean) - NURTURE (will try with new client)
- [x] Transcript 011 - Samuel Fadanelli (Inovativos) - DQ (teacher)
- [x] Transcript 012 - Jimmy Posso (Student) - DQ (student learning data analytics)
- [x] Transcript 013 - Aycha Tammour (Student) - DQ (student term project)
- [x] Transcript 014 - Anthony Lukach (Source Cooperative) - MEETING BOOKED (consultancy, Iceberg)
- [x] Transcript 015 - John Carnell (Learning Only) - DQ (curiosity, no work use)
- [x] Transcript 016 - Brendan Ferris (Weave) - DQ (using Snowflake, no budget)
- [x] Transcript 017 - Sanjay Kumar (Loylty) - NURTURE (evaluating, prefers email)
- [x] Transcript 018 - Lexi Viripaeff - DQ (just curiosity)
- [x] Transcript 019 - Vishnu Kchitti - DQ (hobby/polymarket, Fabric at work)
- [x] Transcript 020 - Ryan Schilling (LeadHub) - NO CONTACT (paternity leave)
- [x] Transcript 021 - Sundoo Park (Quizlet) - NURTURE (at Small Data Conf, follow up)
- [x] Transcript 022 - Quinn Seeger - DQ (personal project, not continuing)
- [ ] Transcript 023+ - Continue extracting...

### Patterns Observed So Far
**Deals/Meetings (3):**
- MarketDial - retail analytics
- BlueSky Solutions - 200GB, 5 facilities, warehousing data
- Anthony Lukach (Source Cooperative) - consultancy, Iceberg, meeting booked

**Common DQ Signals:**
- Volume too low / too small (Christopher Mohs, Maximilian Schön)
- Student / teacher / personal project (Samuel, Jimmy, Aycha, Quinn, Lexi)
- Already using competitor (Snowflake - Rajat, Brendan; Fabric - Vishnu)
- Wrong contact at company
- Using DuckDB locally (no collaboration need)
- Learning/curiosity only (John Carnell)
- Hobby projects (Vishnu - polymarket)

**Nurture Candidates:**
- Joel MacPherson - e-commerce analytics, will test with new client
- Sanjay Kumar (Loylty) - large company, evaluating, prefers email
- Sundoo Park (Quizlet) - at Small Data Conf, interested

**Competitive Intel:**
- Snowflake users happy with ecosystem, ease of use
- Fabric adopted by orgs without existing DWH knowledge
- Microsoft lock-in prevents vendor switching

### Files Created
- `/Users/arya/Desktop/Arya/motherduck-playbook/BDR Playbook/Calls/transcripts/` - Transcript folder
- `/Users/arya/Desktop/Arya/motherduck-playbook/BDR Playbook/Calls/Calls_Playbook.md` - Analysis playbook
- `/Users/arya/Desktop/Arya/motherduck-playbook/BDR Playbook/03_Outbound_Prospecting/04_Cold_Call_Framework.md` - Framework

### Browser Automation Notes
- Use `mcp__claude-in-chrome__read_page` to extract transcript data from the page
- Transcript entries contain: speaker name, timestamp, and text content
- Call metadata (date, BDR, duration) is in the page header
- Call notes and summary are in the Notes tab panel

---

## Screenpipe + DuckDB + MotherDuck Setup (Completed)

### What's Configured

| Component | Status | Location/Details |
|-----------|--------|------------------|
| **Screenpipe** | Running | PID active, captures screen/audio continuously |
| **Screenpipe MCP** | Configured | Global in `~/.claude.json` |
| **MotherDuck MCP** | Configured | Project-level, connects to `md:bdr_analytics` |
| **DuckDB CLI** | Installed | `~/bin/duckdb` (v1.4.4) |
| **Query wrapper** | Created | `~/bin/screenpipe-query` |
| **Sync script** | Created | `~/bin/sync-to-motherduck.sh` |

### MotherDuck Database: `bdr_analytics`

| Table | Records | Description |
|-------|---------|-------------|
| `ocr_data` | 7,661+ | Screen text with timestamps, app_name, window_name |
| `call_transcripts` | 83+ | Audio transcriptions with speaker_id, device |
| `frames` | 7,678+ | App usage with browser_url, timestamps |
| `speakers` | 52 | Speaker identification data |

### How to Use

**Screenpipe MCP** (real-time, local):
```
"Search screenpipe for HubSpot activity in the last hour"
"Find mentions of Snowflake in recent audio transcriptions"
```

**MotherDuck MCP** (analytics, cloud):
```
"Query bdr_analytics: which apps did I use most this week?"
"Query bdr_analytics: show call transcripts mentioning competitors"
```

**Local DuckDB queries** (terminal):
```bash
~/bin/screenpipe-query "SELECT app_name, COUNT(*) FROM frames GROUP BY 1 ORDER BY 2 DESC LIMIT 10"
```

**Sync to MotherDuck** (run daily):
```bash
~/bin/sync-to-motherduck.sh
```

### Key BDR Analytics Queries

**1. App time distribution (last 7 days):**
```sql
SELECT app_name, COUNT(*)/30 as minutes_approx
FROM frames
WHERE timestamp > CURRENT_DATE - INTERVAL '7 days'
GROUP BY app_name
ORDER BY 2 DESC
```

**2. Competitor mentions in calls:**
```sql
SELECT timestamp, transcription
FROM call_transcripts
WHERE transcription ILIKE '%snowflake%'
   OR transcription ILIKE '%databricks%'
   OR transcription ILIKE '%bigquery%'
ORDER BY timestamp DESC
```

**3. Objection tracking:**
```sql
SELECT timestamp, transcription
FROM call_transcripts
WHERE transcription ILIKE '%no budget%'
   OR transcription ILIKE '%too expensive%'
   OR transcription ILIKE '%not interested%'
ORDER BY timestamp DESC
```

**4. HubSpot activity:**
```sql
SELECT DATE(timestamp) as day, COUNT(*) as captures
FROM frames
WHERE app_name = 'Google Chrome'
  AND window_name ILIKE '%hubspot%'
GROUP BY 1 ORDER BY 1 DESC
```

### Daily BDR Improvement Routine

| Time | Action | Tool |
|------|--------|------|
| **Morning** | Review yesterday's calls, find missed follow-ups | Screenpipe MCP |
| **During day** | Quick searches for conversation details | Screenpipe MCP |
| **End of day** | Sync data: `~/bin/sync-to-motherduck.sh` | Terminal |
| **Weekly** | Analyze patterns, time tracking, competitor intel | MotherDuck MCP |

### File Locations

- **Screenpipe DB:** `~/.screenpipe/db.sqlite`
- **Screenpipe settings:** `~/.screenpipe/settings.json`
- **DuckDB CLI:** `~/bin/duckdb`
- **Query script:** `~/bin/screenpipe-query`
- **Sync script:** `~/bin/sync-to-motherduck.sh`
- **Claude MCP config:** `~/.claude.json` (mcpServers section)

---

## BDR Coach - AI Sales Coach CLI (Completed)

### What's Configured

| Component | Status | Description |
|-----------|--------|-------------|
| `bdr-coach` | ✅ Ready | Main CLI entry point |
| `bdr-coach briefing` | ✅ Ready | Generate morning briefing in Obsidian |
| `bdr-coach stats [N]` | ✅ Ready | Show N-day performance stats |
| `bdr-coach import` | ✅ Ready | Import transcripts to MotherDuck |

### Quick Start

```bash
# 1. Load environment (required before each session)
source ~/bin/bdr-coach-env.sh

# 2. Generate morning briefing
bdr-coach briefing

# 3. View performance stats
bdr-coach stats 30
```

### MotherDuck Tables

| Table | Records | Description |
|-------|---------|-------------|
| `hubspot_calls` | 43+ | Curated call records with outcomes |
| `daily_metrics` | - | Aggregated daily performance |
| `call_scores` | - | Discovery framework scoring |

### Key Metrics (as of import)

- **Total Calls:** 43
- **Conversion Rate:** 14% (6 meetings/deals)
- **DQ Rate:** 67%
- **Top BDR:** Clark Fischer (17.4% conversion)

### Files Created

| File | Purpose |
|------|---------|
| `~/bin/bdr-coach` | Main CLI entry point |
| `~/bin/bdr-coach-briefing.sh` | Morning briefing generator |
| `~/bin/bdr-coach-stats.sh` | Performance statistics |
| `~/bin/bdr-coach-import.sh` | Transcript importer |
| `~/bin/bdr-coach-env.sh` | Environment setup (tokens) |
| `~/bin/bdr-coach-schema.sql` | Database schema |
| `~/Desktop/Arya/Daily Notes/` | Briefing output folder |
| `~/Desktop/Arya/Templates/Daily Briefing.md` | Note template |

### Enable AI Coaching

To enable personalized AI coaching insights:

```bash
# Add to ~/bin/bdr-coach-env.sh
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Then source and run
source ~/bin/bdr-coach-env.sh
bdr-coach briefing
```

### Daily Routine

| Time | Action | Command |
|------|--------|---------|
| **Morning** | Generate briefing | `source ~/bin/bdr-coach-env.sh && bdr-coach briefing` |
| **End of day** | Check stats | `bdr-coach stats` |
| **Weekly** | Full analysis | `bdr-coach stats 30` |

### Future Features

| Feature | Description | Status |
|---------|-------------|--------|
| Post-call analysis | AI feedback after each call | Planned |
| Skill drills | Practice objection handling | Planned |
| Real-time coaching | Live suggestions during calls | Planned |
| Weekly review | Comprehensive weekly report | Planned |

---

## Call Prep Workflow (Active)

### Overview
Automated workflow to generate personalized call prep documents from LinkedIn profiles using the MotherDuck BDR Playbook.

### Quick Start

**Option 1: Use the slash command**
```
/call-prep https://linkedin.com/in/prospect-name
```

**Option 2: Paste LinkedIn content directly**
```
Create a call prep for: [paste LinkedIn profile content]
```

### What Gets Generated

Each call prep document includes:
- **Priority signals** - Why this prospect matters
- **Tailored openings** - 2 options based on their profile
- **Discovery questions** - Customized for their role/company
- **Talking points** - Relevant value props from playbook
- **Objection handling** - Anticipated pushback + responses
- **The Ask** - How to close for the SA meeting
- **Quick facts** - Key info at a glance
- **Call notes template** - Ready for HubSpot

### Files & Locations

| Item | Location |
|------|----------|
| **Skill definition** | `.claude/skills/call-prep.md` |
| **Template** | `Call Prep/TEMPLATE_Call_Prep.md` |
| **Output folder** | `Call Prep/` |
| **Playbook source** | `.archive/motherduck-playbook/BDR Playbook/` |

### Naming Convention
```
Call Prep/FirstName_LastName_Company.md
```

Examples:
- `Shannon_McGill_FullStackDataSolutions.md`
- `John_Smith_Acme.md`

### Key Playbook Files Referenced

1. **Calls Playbook** - Patterns, talk tracks, discovery framework
   ```
   .archive/motherduck-playbook/BDR Playbook/Calls/Calls_Playbook.md
   ```

2. **Cold Call Framework** - Objection handling, call structure
   ```
   .archive/motherduck-playbook/BDR Playbook/03_Outbound_Prospecting/04_Cold_Call_Framework.md
   ```

3. **Competitive Intel** - Battlecards for Snowflake, Databricks, BigQuery
   ```
   .archive/motherduck-playbook/BDR Playbook/06_Competitive_Intel/
   ```

### Signal Detection

**High-Priority Signals (look for these):**
| Signal | Why It Matters |
|--------|----------------|
| Consultant/Agency | Multiplier - can bring to multiple clients |
| Snowflake experience | Cost savings angle (70% cheaper) |
| Cost optimization work | Already thinking about savings |
| AI/ML projects | Pitch MCP server, PROMPT QUERY |
| Small team | Simplicity angle |
| GB-TB data volumes | Sweet spot for MotherDuck |

**Potential DQ Signals:**
| Signal | Risk |
|--------|------|
| Student/teacher | Not business use |
| Personal project | No budget |
| Petabyte scale | May need enterprise solution |
| Deep competitor lock-in | Hard to switch |

### Workflow Steps

1. **Input**: LinkedIn URL or pasted profile content
2. **Extract**: Parse name, title, company, experience, skills
3. **Analyze**: Identify signals, match to playbook patterns
4. **Generate**: Create personalized call prep from template
5. **Save**: Write to `Call Prep/` folder
6. **Summary**: Show top angles and recommended approach

### Example Usage

**Input:**
```
Create a call prep for this prospect:

Shannon McGill
Data Engineering Consultant at Full Stack Data Solutions
- "Cost optimization strategies reducing Snowflake spend by 20%"
- Works with BigQuery, Snowflake, Airflow
- Building CEO Sidekick AI app
```

**Output:**
- Identifies: Consultant (multiplier), Snowflake cost focus, AI interest
- Recommends: Cost angle opening, consultant value prop
- Creates: `Call Prep/Shannon_McGill_FullStackDataSolutions.md`

### Tips

- **Before calls**: Review the generated prep, highlight 2-3 key points
- **During calls**: Use the call notes template to capture info
- **After calls**: Update HubSpot with outcome and notes
- **Iterate**: If a pattern works well, let me know to update the playbook
