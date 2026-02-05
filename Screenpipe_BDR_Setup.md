# Screenpipe BDR Productivity Setup

## What's Installed

### Core Components
- **Screenpipe v0.3.7** - Screen/audio recording with OCR and transcription
- **Ollama v0.15.4** - Local LLM for AI analysis (llama3.2 model)
- **Screenpipe MCP** - Claude Code integration for querying data

### Location of Binaries
```
~/bin/screenpipe      # Screen recorder
~/bin/ollama          # Local LLM
~/bin/ffmpeg          # Video processing
~/bin/start-screenpipe # Startup script
```

### Data Storage
```
~/.screenpipe/        # Main data directory
  ├── db.sqlite       # Screen/audio data
  ├── data/           # Video chunks
  ├── pipes/obsidian/ # Obsidian integration
  └── settings.json   # Configuration
```

## Quick Start

### Start Everything
```bash
~/bin/start-screenpipe
```

### Or Start Manually
```bash
# Terminal 1: Start Ollama
~/bin/ollama serve

# Terminal 2: Start Screenpipe
~/bin/screenpipe --fps 0.5 --audio-chunk-duration 30 --enable-pipe-manager --language english --disable-telemetry
```

### Enable Obsidian Logging
```bash
curl -X POST "http://localhost:3030/pipes/enable" -H "Content-Type: application/json" -d '{"pipe_id": "obsidian"}'
```

## Using with Claude Code

The MCP server is configured. Start a new Claude session and ask:

```
claude
> "What did I do in the last hour?"
> "What objections came up in my calls today?"
> "How much time did I spend in HubSpot?"
> "Summarize my interaction with [prospect name]"
```

## Permissions Required

Grant these in System Settings > Privacy & Security:
1. **Screen Recording** - For screen capture
2. **Microphone** - For audio/call transcription
3. **Accessibility** - For enhanced OCR (optional)

## Obsidian Integration

Your vault is at: `/Users/arya/Desktop/Arya/`

Created folders:
- `Daily Notes/` - Auto-generated summaries
- `Call Transcripts/` - Important call exports
- `Objection Library/` - Common objections reference
- `Templates/` - Daily note template

### Cron Jobs Active
- Every 5 min: Log activity to daily note
- Every hour: AI intelligence analysis

## API Endpoints

| Service | URL | Purpose |
|---------|-----|---------|
| Screenpipe | http://localhost:3030 | Main API |
| Ollama | http://localhost:11434 | LLM API |

### Useful API Queries

```bash
# Health check
curl http://localhost:3030/health

# Search OCR text
curl "http://localhost:3030/search?q=HubSpot&limit=10&content_type=ocr"

# Search audio transcripts
curl "http://localhost:3030/search?q=budget&limit=10&content_type=audio"

# List pipes
curl http://localhost:3030/pipes/list
```

## Self-Coaching Workflow

### Daily Review
1. Open Obsidian daily note
2. Review auto-generated activity summary
3. Query specific calls: `"find my call with [company]"`
4. Note objections and update library

### Weekly Review
Query patterns:
- "What were common objections this week?"
- "How much time did I spend prospecting vs admin?"
- "Which apps did I use most?"

## Troubleshooting

### Screenpipe not capturing screen
1. Check System Settings > Privacy & Security > Screen Recording
2. Grant permission to Terminal/iTerm
3. Restart Screenpipe

### No audio transcription
1. Check microphone permissions
2. Ensure microphone is selected in Screenpipe config

### MCP not connecting
```bash
# Rebuild MCP server
cd ~/.screenpipe/mcp && npm run build

# Verify connection
claude mcp list
```

### Stop all services
```bash
pkill screenpipe
pkill ollama
```

## Storage Management

Estimated storage: ~500MB/day (8 hours recording at 0.5 FPS)

To clean old data:
```bash
# Check database size
ls -lh ~/.screenpipe/db.sqlite

# Video chunks
du -sh ~/.screenpipe/data/
```

## Configuration Reference

Settings file: `~/.screenpipe/settings.json`

Key settings for Obsidian pipe:
- `vaultPath`: Path to Obsidian vault
- `logTimeWindow`: Minutes of data per log entry (default: 5)
- `analysisTimeWindow`: Hours for AI analysis (default: 60)
