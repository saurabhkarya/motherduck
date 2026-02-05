# Screenpipe + DuckDB + MotherDuck Setup

## What's Been Configured

### 1. Claude API for Obsidian Pipe
**File:** `~/.screenpipe/settings.json`

The Obsidian pipe is now configured to use Claude Sonnet for AI analysis:
- Model: `claude-sonnet-4-20250514`
- Max context: 100,000 characters
- **Action Required:** Replace `YOUR_ANTHROPIC_API_KEY` with your actual API key

```bash
# Edit settings to add your API key
nano ~/.screenpipe/settings.json
```

### 2. DuckDB CLI Installed
**Location:** `~/bin/duckdb` (v1.4.4)

### 3. Query Wrapper Script
**Location:** `~/bin/screenpipe-query`

Query Screenpipe data easily:
```bash
# Top apps by screen time
~/bin/screenpipe-query "SELECT app_name, COUNT(*) as captures FROM frames GROUP BY app_name ORDER BY captures DESC LIMIT 10"

# Recent transcriptions
~/bin/screenpipe-query "SELECT timestamp, transcription FROM transcripts ORDER BY timestamp DESC LIMIT 5"

# Search for competitor mentions
~/bin/screenpipe-query "SELECT timestamp, transcription FROM transcripts WHERE transcription ILIKE '%snowflake%'"
```

### 4. MotherDuck Sync Script
**Location:** `~/bin/sync-to-motherduck.sh`

```bash
# Set your token first
export MOTHERDUCK_TOKEN="your_token_here"

# Run sync
~/bin/sync-to-motherduck.sh
```

---

## Available Tables (via screenpipe-query)

| View | Description |
|------|-------------|
| `frames` | Screen captures with app_name, window_name, browser_url |
| `ocr` | OCR text extracted from frames |
| `transcripts` | Audio transcriptions with speaker_id |
| `speakers` | Speaker identification data |

---

## Example BDR Queries

### Time spent per app today
```sql
SELECT
    app_name,
    COUNT(*) * 2 as seconds_approx
FROM frames
WHERE DATE(timestamp) = CURRENT_DATE
GROUP BY app_name
ORDER BY seconds_approx DESC
LIMIT 10
```

### Competitor mentions in calls
```sql
SELECT timestamp, transcription
FROM transcripts
WHERE transcription ILIKE '%snowflake%'
   OR transcription ILIKE '%databricks%'
   OR transcription ILIKE '%bigquery%'
ORDER BY timestamp DESC
```

### Objection patterns
```sql
SELECT timestamp, transcription
FROM transcripts
WHERE transcription ILIKE '%no budget%'
   OR transcription ILIKE '%not interested%'
   OR transcription ILIKE '%already using%'
ORDER BY timestamp DESC
```

### Browser URLs visited
```sql
SELECT browser_url, COUNT(*) as visits
FROM frames
WHERE browser_url IS NOT NULL
GROUP BY browser_url
ORDER BY visits DESC
LIMIT 20
```

---

## Prerequisites Still Needed

- [ ] **Anthropic API key** - Add to `~/.screenpipe/settings.json`
  - Get from: https://console.anthropic.com/

- [ ] **MotherDuck token** (for cloud sync)
  - Get from: https://app.motherduck.com/ (Settings → Access Tokens)

---

## Verification

```bash
# Check DuckDB works
~/bin/duckdb --version

# Test Screenpipe query
~/bin/screenpipe-query "SELECT COUNT(*) as total_frames FROM frames"

# Check settings
cat ~/.screenpipe/settings.json | grep claude
```
