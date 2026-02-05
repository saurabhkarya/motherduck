# Slack Channel Insights & Best Practices
*Comprehensive guide derived from BDR team Slack channel history (Oct 2025 - Jan 2026)*

---

## Quick Navigation
- [Outreach Philosophy](#outreach-philosophy)
- [Cold Calling](#cold-calling)
- [LinkedIn Tactics](#linkedin-tactics)
- [Email & Sequences](#email--sequences)
- [Meeting Booking](#meeting-booking)
- [Qualification Criteria](#qualification-criteria)
- [Trial & Onboarding](#trial--onboarding)
- [Meeting Notes Standard](#meeting-notes-standard)
- [AE/CE Pairings](#aece-pairings)
- [Tools & Processes](#tools--processes)
- [Competitive Intelligence](#competitive-intelligence)
- [Learning Resources](#learning-resources)
- [Team Culture](#team-culture)
- [Real Success Stories](#real-success-stories)

---

## Outreach Philosophy

### The "Anti-Sales" Approach
MotherDuck BDRs use a distinctively non-salesy approach that has proven highly effective:

1. **Be Curious, Not Pushy**: Lead with genuine curiosity about what the prospect is building
2. **Assert, Don't Ask**: Say "Let's meet Tuesday at 2pm" instead of "Can we meet sometime?"
3. **Stay Quiet After Questions**: Don't over-explain. Ask a targeted question, then shut up
4. **Find Common Ground**: Get the prospect to feel like you're on the same side of the table

> *"I think at a certain point in an org's maturity they just hire a BDR Leader that's been leading BDR teams for a good while, then they come in and use the same playbook that worked for them from 2015-2020, meanwhile the landscape has changed and traditional outbound no longer works like it did then. I'm aligned with our anti-sales approach. It works."*

### The "Old School" Comeback
While everyone rushes to AI-automate outbound, the winners differentiate with:
- **Phone calls** (when everyone else is emailing)
- **Small events** and personal touches
- **Direct mail and gifting** (swag program)
- **AI reserved for research and targeting** - not automating everything

---

## Cold Calling

### Opening Script
```
"Hey, this is [Name] from MotherDuck. Noticed you signed up for MotherDuck—
just wanted to call to hear what you're workin' on / buildin'."
```

### Daily Routine
**First thing when you sit at your desk: Make 10 calls.**

### Best Practices
- **Be Fast**: Responding within 10-20 minutes of signup dramatically increases booking rates
- **Leave Voicemails**: Even if no connect, voicemails contribute to multi-touch awareness
- **Call Timing**: EU prospects are often more receptive to calls/text
- **AI Operator Workaround**: If you hit an AI operator asking for name/reason, try saying the prospect's own company name as a workaround

### Phone Setup
- NYC area code 646 recommended for NYC-based BDRs
- Each BDR should have their own direct number
- Headsets recommended for quality

---

## LinkedIn Tactics

### First Touch Messaging (Non-Salesy)
This approach has received consistent positive feedback:

```
"Hey [Name]! I saw you were checking out MotherDuck/DuckDB.
Any feedback for us? Curious as to what you're building."
```

### What Makes It Work
- Opens with curiosity, not a pitch
- Asks for feedback (positions them as expert)
- Shows genuine interest in their work
- No immediate ask for a meeting

### LinkedIn Engagement Strategies
1. **Connect with all new signups** - LinkedIn tasks for new leads
2. **Post regularly** - Aim for 3 LinkedIn posts per week
3. **Engage with prospect content** - Like/comment before reaching out
4. **Follow up ghosted leads with something fun** (memes, GIFs)

### Community Slack Invites
- **Manually invite good leads** to the MotherDuck community Slack
- When they join, DM them a welcome message
- If ICP, parlay the welcome into a demo conversation
- If not ICP, just be warm and helpful

> *"I added this guy earlier this week and he's been pretty active—sent him a DM and booked him for a meeting."*

---

## Email & Sequences

### Sequence Platforms
- **HubSpot**: For standard sequences
- **Instantly.ai**: For higher-volume campaigns (Kafka, events)

### Key Campaigns Referenced
1. **West Coast Campaign** - Geographic targeting
2. **EU Campaign** - European prospects (GoDataFest, etc.)
3. **Kafka Streaming Campaign** - Tech-specific outbound
4. **Coalesce Event Campaign** - Conference follow-up
5. **E-book/Content Download** - Nurture sequences

### Ghost Recovery Tactics
- **Giphy/Meme Follow-up**: If ghosted for a week+, send a relevant GIF or meme
- **Tentative Calendar Hold**: Put a 15-min tentative hold on their calendar
- **Multi-channel Approach**: If email fails, try LinkedIn + call

### Email Best Practices
- **Disable open-tracking** to help deliverability
- **Check spam regularly** - Found replies once every few weeks
- **Personalize triggers**: Funding rounds, job postings, DuckDB GitHub activity

---

## Meeting Booking

### Tentative Calendar Hold Play
One of the most effective tactics:
1. If a good lead hasn't responded for a week, put a **tentative 15-min hold** on their calendar
2. Offer an alternative if timing doesn't work
3. If they no-show, it's fine - maintain daily blocks of calls with leads you're trying to reach

> *"My experience so far is that leads are actually really positively receptive of it."*

### Manual vs. Calendly
- **Manual booking preferred** over Calendly links
- Calendly is passive and relies on prospect clicking
- Assert a specific time: "Let's meet Tuesday at 2pm" - let them say no
- If they push back, they'll often settle for "later next week" - still a yes

### Same-Week Deal Challenge
Internal competition to book AND complete demos within the same calendar week:
- **Speed matters**: Event leads go cold faster than anything else
- **Follow up aggressively**: "What worked? Being fast asfff boiii"

### Calendar Coordination
- Check AE/CE availability before booking
- Avoid double-booking across calendars
- **Max 3 MotherDuckers on a demo call** - more creates awkward power balance

---

## Qualification Criteria

### Signals of a Good Lead
| Signal | Why It Matters |
|--------|----------------|
| 10-20 TB data per month | Sweet spot for MotherDuck |
| Parquet files | Technical alignment |
| Arrow files | Modern data stack |
| Snowflake frustration | Compete opportunity |
| Current DuckDB user | Easy migration path |
| Data Engineer title | Technical buyer |
| Hiring data engineers | Growing team = budget |
| Recent funding | Resources available |

### Red Flags / Disqualification Criteria
| Red Flag | Action |
|----------|--------|
| Hobbyist/passion project | SDR disco only, or nurture |
| No current project/tire kicking | Ask probing questions to uncover real use case |
| FedRAMP requirement | Cannot support currently |
| Strict on-prem requirement | Not a fit |
| Students/professors | Point to free tier, community |
| Location concerns (some regions) | Disco first to assess |
| JSON + teeny tiny data (<100 GB) | Evaluate fit carefully |
| RBAC strict requirements | Feature blocker (proceed with caution) |

### Handling "Personal Use" Claims
Even if prospect claims "personal use" or "playing around":
- **Dig deeper** if they're a Data Engineer at a large company
- Large orgs (like Slalom with 10K+ employees) definitely have Snowflake/BigQuery workloads
- Probe to explore where MotherDuck might fit those workloads
- Bring an AE - it's worth the at-bat even if they resist

> *"Prospect said his interest was 'purely for playing around' and 'personal related things.' I dug deeper, knowing that as a data engineer at a 10,000+ employee company, cloud data warehouses almost certainly exist in his environment."*

### Feature-Restricted Leads
**Still book them** if it's a large enterprise:
- We want the at-bat / partnership opportunity
- Proceed with caution but don't auto-disqualify

---

## Trial & Onboarding

### Pressurized Trial Flow (Jan 2026)
- New flow with a "soft gate" in front of trial access
- Many users select "Free" at the bottom and skip onboarding calls
- **Action**: If new signup is on "Free", suggest a free trial to engage

### Trial Extension Requests
When prospects ask to extend trial without wanting to meet:

**Sample Response**:
```
Thanks for the transparency, I appreciate you letting me know where you're at.

Unfortunately, I'm not able to extend the trial at this time, but I'd be happy
to point you to some resources that might help with your R&D:

• Our documentation has detailed technical guides and examples
• The MotherDuck blog covers architecture deep-dives and use case patterns
• The DuckDB community (Discord/GitHub) is great for general DuckDB questions

If your evaluation needs change or you'd like to discuss a specific use case
down the line, feel free to reach out. Always happy to reconnect when the
timing makes more sense.
```

Also: Add them to community Slack for continued engagement.

---

## Meeting Notes Standard

### Pre-Meeting Notes Format
Add to the **Pre-Meeting notes field** on the Deal record in HubSpot:

```
Company: [Company Name]
Role: [Prospect's Title]
Use Case / Need: [What they're trying to solve]
Stack: [Current tech - Snowflake, BigQuery, DuckDB, etc.]
Goals for the meeting: [What you want to accomplish]
```

### Post-Booking Process
1. Send AE + CE a note via Slack AND email
2. Attach notes to "Notes" section in HubSpot
3. Create deal in HubSpot with BDR owner
4. Confirm prospect is on calendar invite

### Notes on the Deal
- Don't book a demo without proper notes - "Makes the team lose trust"
- Notes should be clear and actionable
- AEs need to know why you think this lead is qualified

---

## AE/CE Pairings

### Current Pairings (Jan 2026)
| AE | CE | Notes |
|----|-----|-------|
| Bill | Hannah | Primary pair |
| Audrey | Bev | Primary pair |
| Alex | Pranjal | Primary pair |
| Logan | Hannah | Shares CE with Bill |
| Dermott | Bev | Shares CE with Audrey |
| Neil | Pranjal | Shares CE with Alex |
| Bendik | Leo | EU focus |
| Scott | - | Acts as both AE & CE |

### Booking Guidelines
- Add Scott manually to new AE bookings
- When booking with a CE who partners with two AEs, coordinate calendars
- Use the "Assign AE owner" button on contacts when booking
- Check the [AE/CE pairing doc](https://docs.google.com/spreadsheets/d/1zB0hKxu-Aa7SdGPkfubFpSl3CdZzLKi_X6T2QB2td-8/) for latest

---

## Tools & Processes

### HubSpot
- **Task Queues**: Alternate A/B queues for managing volume
- **Deal Workspace**: Pre-meeting notes field visible to AEs
- **Sequences**: Standard outbound sequences
- **Notable Leads Field**: Use this to flag high-priority leads

### Instantly.ai
- Higher-volume email campaigns
- Kafka, event, and geographic campaigns
- Watch for bounce rates affecting deliverability

### Common Room
- Intent signal monitoring
- Surfaces leads mentioning keywords: "snowflake bills", "snowflake alternative", "cost-efficient data warehouse", "motherduck", "duckDB", "duckLake"
- Monitors: Reddit, Twitter, Public Slack, Discord, LinkedIn

### RunLLM
- Internal Slack tool for asking questions about MotherDuck
- Use it to quickly find product information
- "It's very good and you can just ask it questions about MotherDuck, the Space etc"

### Omni Dashboards
- BDR tracking dashboards
- Pipeline production views
- HubSpot syncs every 3 hours

### Task Management Tips
- **Clean up stale tasks** - Auto-complete tasks older than 7 days
- **Watch for duplicates** - Common issue in task queues
- **Prioritize**: High priority contacts > Med priority (self-serve) > Low priority (newly sequenced)

---

## Competitive Intelligence

### Battle Cards Available
| Competitor | Status | Key Positioning |
|------------|--------|-----------------|
| **Snowflake** | Complete | Cost savings (70%), no idle costs, simpler |
| **Redshift** | Complete | Migration ease, serverless vs. cluster management |
| **ClickHouse** | Complete | Ease of use, managed service |
| **Databricks** | Draft | Analytics focus vs. ML complexity |
| **Postgres** | Complete | OLAP vs. OLTP, analytics performance |
| **Self-Hosted DuckDB** | Complete | Cloud benefits, collaboration, persistence |

### Key Competitive Insight
When a prospect says "diet Snowflake" or similar:
- This is actually a compliment in disguise
- Position: Simpler, cheaper, faster for analytics workloads
- Don't need the enterprise complexity if use case doesn't require it

### Large Enterprise Compete
For big accounts ($35-50M Snowflake spenders):
- Focus on first use case, not full replacement
- Partner opportunity mindset
- Emphasize POC and proving value

---

## Learning Resources

### Recommended Courses
1. **W3Schools SQL** - Beginner-friendly building block
2. **Coursera: Data Warehouse Fundamentals** - Best conceptual first step (BI Foundations with SQL, ETL)
3. **CMU Intro to Database Systems (15-445/645)** - Deeper technical understanding
4. **DuckDB Performance Docs** - Product-specific knowledge

### MotherDuck-Specific Learning
- **Mark's DuckDB Session**: Technical deep-dive video
- **MotherDuck Blog**: Architecture and use case patterns
- **NotebookLM**: Create "podcast episodes" from collateral for mixed-medium learning
- **"Duck DNA" Training**: Internal technical education program

### YouTube Resources
- CMU Database Systems Fall 2024 playlist
- CMU Database Systems Fall 2025 playlist (ongoing)

### Resource Links
- [MotherDuck Docs](https://motherduck.com/docs)
- [DuckDB Docs](https://duckdb.org/docs/)
- [Just Enough SQL for AI](https://motherduck.com/blog/just-enough-sql-for-ai/)

---

## Team Culture

### "Weymashark" Morning Standups
- Quick morning sync (originally 8:30-8:45am)
- Share what's working, what's not
- Exchange ideas, creative plays
- Keep momentum and avoid staleness
- Goal: "Get a little better, do a little more each day"

### Big Fish Competition
- Track meetings booked on a leaderboard
- Top BDR gets special recognition
- Options discussed: Slack emoji, "Fish Emperor" title, coffee rewards

### #bdr-wins Channel
- Post deal links when you book meetings
- Share what messaging worked
- Types of companies/industries
- Celebrate wins and friendly competition

### Swag Program
- Each BDR can send **5 swags per week**
- Keep to GOOD leads, specifically trials
- Just send names/links to leadership for approval

### Bingo Card Challenge Ideas
- Meeting booked over call/text
- Meeting booked on LinkedIn
- Re-engage cold lead with a meme
- 3 LinkedIn posts in 1 week
- Book call with Snowflake/ClickHouse user
- Meeting booked with company that becomes key account
- Book someone for in-person meeting
- Book a lead in China
- 5 meetings in a day

---

## Real Success Stories

### The $35-50M Snowflake Compete
> *"Best lead of my career. 'I'm spending 35-50m on snowflake for a 3yr deal, I don't want to. We are sold, let's figure out this first use case.' Was effectively how it ended."*

**What worked**: Found the hook early, positioned MCP as the win, used deadline to accelerate.

### Insurify
- 40 TB of data
- Good Coalesce follow-up
- Key account potential

### TCHO Chocolate
- Won by making puns and having fun
- Logan re-engaged after first "no", doubled down
- Both AE and BDR decided to "just have fun with it"

### Fanatics
- Long-term deal
- Got green light from champion's boss
- Patient approach to large enterprise

### Artisan (Booked Twice)
- Different contacts, same company
- What worked: Speed - "Being fast asfff boiii"

---

## Key Quotes to Remember

> *"No ego, get help, work together."* - On objection handling

> *"Side note: When we get objections, cancellations, reschedules whatever—share them with me / the AEs. We know how to get people back online and it will be good learning for you all."*

> *"Event leads go cold faster than anything else—time kills these more than others."*

> *"The bravest thing you can ever do is ask for help."*

> *"This BDR team is going to be the last standing BDR team in the AI revolution. You will equip yourselves like cyborgs, but you will not be replaced. That means we need to be scrappy and not fall into old patterns. You need to THINK critically and try new shit. USE TECHNOLOGY."*

---

## Objection Handling Process

### When You Get Blocked
1. **Share immediately** with AE/leadership
2. **Get their input** on response
3. **Share the win** in #objectionhandling channel if you overcome it
4. **Document** what worked for others to learn

### Channel: #objectionhandling
- Living repository of pushback and responses
- Share objections as they come
- Include context: what they said, what you tried, what worked

---

## Appendix: Key Documents Referenced

| Document | Purpose |
|----------|---------|
| Pitch Talk Track (Logan's version) | Call framework |
| SDR Discovery Framework (Weyman's version) | Discovery structure |
| Technical BDR Plan | Learning curriculum |
| MotherDuck Call Guide | Call preparation |
| ICP Target Personas Doc | Qualification criteria |
| AE/CE Pairing Spreadsheet | Booking coordination |

---

*Last updated: January 2026*
*Source: BDR Team Slack Channel*
