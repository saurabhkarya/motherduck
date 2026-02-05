# BDR Operations Guide (Team-BDR Channel)
*Comprehensive operational guide derived from the #team-bdr Slack channel (Jul 2025 - Jan 2026)*

---

## Quick Navigation
- [Daily Workflows & Lists](#daily-workflows--lists)
- [HubSpot Setup & Management](#hubspot-setup--management)
- [Sequence Best Practices](#sequence-best-practices)
- [Auto-Sequencing System](#auto-sequencing-system)
- [Phone & Calling Operations](#phone--calling-operations)
- [Event Lead Management](#event-lead-management)
- [Calendly & Meeting Booking](#calendly--meeting-booking)
- [Lead Routing & Assignment](#lead-routing--assignment)
- [Swag Program](#swag-program)
- [Instantly (Cold Email)](#instantly-cold-email)
- [Common Room Integration](#common-room-integration)
- [Battle Cards & Resources](#battle-cards--resources)
- [Performance Tracking](#performance-tracking)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Daily Workflows & Lists

### Priority Contact Lists (Work These Daily)
| List | Purpose | Link Format |
|------|---------|-------------|
| **My New PLG Leads** | New account signups | `objects/0-1/views/49636569/list` |
| **My New Demand Gen Leads** | Ebook downloads, content engagement | `objects/0-1/views/49635934/list` |
| **My Existing Leads with Usage** | Trial users with compute activity | `objects/0-1/views/49637280/list` |
| **My Existing Leads with Website Visit** | Re-engaged leads | `objects/0-1/views/49640343/list` |
| **My Existing Leads with Response** | Leads who replied | `objects/0-1/views/49640823/list` |
| **My Manually Contacted Leads** | Outbound tracking | `objects/0-1/views/49641065/list` |
| **My New Contacts from Customers/Deals** | Expansion opportunities | `objects/0-1/views/49736198/list` |

### List Filtering Best Practices
Always use these filters when working lists:
- `BDR owner = me`
- `Last sequenced date = unknown OR > 14 days ago`
- `suppress_contact = null` (to exclude partners/competitors)

### Notable Lead Tracking
Use the `notable_lead` field to flag high-potential contacts:
- Post to #notable-leads channel daily
- Track patterns in what makes leads notable
- Come back to these leads consistently

### Suppression System
To prevent reaching out to partners/competitors:
1. Set `suppress_company` on the Company level
2. Workflow automatically populates `suppress_contact` on associated contacts
3. Already suppressed: Litebox, Cobalt, and competitors (Snowflake, Databricks)

---

## HubSpot Setup & Management

### Key Properties to Know
| Property | Level | Purpose |
|----------|-------|---------|
| `BDR Owner` | Contact | Your assigned contacts |
| `Contact Owner` | Contact | Assigned AE |
| `Clay Fit Score` | Contact | ICP scoring (-40 to +40) |
| `Last Touch Program` | Contact | Source/campaign tracking |
| `notable_lead` | Contact | Flag for high-potential leads |
| `suppress_contact` | Contact | Exclude from outreach |
| `suppress_company` | Company | Exclude entire company |

### Deal Creation
Deals are auto-created when:
- Meeting contains "Intro to Motherduck" or "<> MotherDuck"
- Meeting does NOT contain "tentative"
- Contact is not associated with an existing open deal

**Manual Deal Creation**: If automation fails, record a Loom of your process for audit.

### Workflow Notifications
- Lead routing notifications go to #bdr-leads-routing
- Notifications include BDR name tag (even on weekends)
- Fine-tune your Slack notifications for the channel

### Dashboard Access
- **BDR Terminal**: Your meeting and activity tracking
- Acceptance rate + deal status now visible
- Booked meetings tracked by quarter

---

## Sequence Best Practices

### Core Sequences
| Sequence Type | Purpose | Key Notes |
|---------------|---------|-----------|
| **Signup Sequence** | New account signups | Auto-enrolled for ICP 15+ |
| **DuckDB Ebook Sequence** | Ebook downloads | 20%+ reply rate achieved |
| **Contact Us Sequence** | Form submissions | High priority, fast follow-up |
| **Web Visits Sequence** | Re-engaged leads | Trigger: website activity |
| **Usage Sequence** | Active trial users | Trigger: compute usage |
| **Event Follow-up** | Conference leads | Personalization is key |

### Sequence Performance Tips
1. **A/B tests must be manually turned on** - They are NOT on by default
2. **Reply rates**: Target 10%+ for cold, 20%+ for warm
3. **Timing matters**: Too fast = creepy, too slow = cold
4. **Personalization wins**: BDL event taught us mass sequencing is 10x less effective

### Sequence for New Org Users (Teammates)
For contacts joining existing orgs, use specialized messaging:

**Email 1 (Day 0)**: Welcome + access check
```
Hey [Name] - welcome to MotherDuck!
Saw you just joined the rest of your team's Motherduck org/account.
Since you're joining an existing team, you should already have access
to your company's databases and queries.
Need help finding anything or getting oriented?
```

**Email 2 (Day 3)**: Check-in on access
**Email 3 (Day 7)**: Resource share (dbt, Python, SQL guides)
**Email 4 (Day 14)**: Friction check

### Incomplete Signup Sequence
For users who started but didn't complete signup:
- Direct them to: `https://app.motherduck.com/?auth_flow=signup`
- Use messaging about helping them complete setup

---

## Auto-Sequencing System

### How It Works
- **Trigger**: New contacts with ICP score 15+ (top ~17%)
- **Timing**: 7-minute delay after creation, +5 min from router
- **Sequences**: Based on source (signups vs. ebook downloads)
- **Dashboard**: Track performance at `/reports-dashboard/22616816/view/17885866`

### Auto-Sequence Decisions (Oct 2025)
1. Auto-enroll contacts with Clay Fit Score 15+
2. Use 2 sequences: Account signups AND e-book downloads
3. Maintain running list of auto-enrolled contacts
4. Compare metrics vs. manually enrolled

### Performance Insights
- **Reply rates**: Generally higher for auto-sequenced (with exceptions)
- **Meeting rates**: Similar overall
- **Issue identified**: Timing of email sends may be too fast (creepy factor)

### Recommendations
1. Experiment with delay timing (currently ~7 min may be too fast)
2. Consider: "No way a human could have crafted this that fast"
3. 4+ minutes delay feels more believable as a human response

---

## Phone & Calling Operations

### Phone Number Health
- Register numbers with **Hiya** to reduce spam risk
- Check health score regularly
- **50 dials/day max** per number to avoid spam flags
- Request additional numbers if needed for high-volume days

### Spam Prevention Tips (from Hiya)
1. Vary call timing throughout the day
2. Don't hammer the same area codes
3. Register numbers as legitimate business
4. Consider "branded" calls for recognition

### Call Recording Rules
**Dual-Consent States/Countries** (recording requires permission):
- Germany (strict PII laws - avoid calling without guidelines)
- Colombia
- California (and other US states)
- Berlin specifically

**Auto-recording**: Only enabled for single-consent locations
**Manual recording**: Click record button for dual-consent - still worth calling!

### Callback Management
- Callbacks often get missed
- Explore notification options
- Consider phone sync to mobile
- Check HubSpot for call activity regularly

### Voicemail Tips
> *"I think we might be related, my last name is Fischer too"*

Little ways to show you're human make a big difference at scale with data engineers.

---

## Event Lead Management

### Event Lead Priority
Event leads go cold faster than any other lead type. Speed is critical.

### Event Briefing Process
1. Create event brief doc with sample copy
2. Set up dedicated sequence for each event
3. Tag leads with `Last Touch Program` = "[Event Name]"
4. Coordinate BDR coverage before event

### Event Sequence Structure
**For Attendees**:
- Reference specific sessions/talks
- Mention meeting at booth if applicable
- Personalize based on notes

**For No-Shows**:
- Reference what they missed
- Offer recording/resources
- Lower-pressure follow-up

### Recent Events Tracked
| Event | Last Touch Program Tag |
|-------|------------------------|
| Big Data London | `BDL 2025 Booth`, `BDL 2025 Party` |
| Coalesce | `Coalesce` |
| Small Data SF | `Small Data SF` |
| SF Tech Week | `SF Tech Week 2025` |
| AI by the Bay | `AI by the Bay` |
| Data in the D | `Data in the D` |
| dbt Meetup Amsterdam | Various |

### Event Upload Process
1. Jerel/Hsio upload leads to HubSpot
2. Tag with Last Touch Program
3. Create/assign to dedicated sequence
4. Route notifications can be turned off during bulk uploads

---

## Calendly & Meeting Booking

### Current Booking Links
| AE | Link | Notes |
|----|------|-------|
| Neil | With Pranjal | East Coast |
| Logan | Standard link | West Coast / APAC |
| Dermott | With paired CE | East Coast |
| Bill | Luka (AM), Bev (PM) | Split coverage |
| Audrey | Luka (AM), Carlin (PM) | Split coverage |
| Alex | With Pranjal/Blossom | Varies |

### Booking Best Practices
1. **Check pairing doc** before booking
2. **Don't use Calendly for paired bookings** if one person has conflicts
3. **Add optional attendees** (e.g., Bev for Dermott calls) when swapping CEs
4. Book up to 5 business days in advance, no earlier than 1 hour out

### New Signup Flow (Jan 2026)
- Users book 15-min "Product Onboarding Call" for Business trial access
- "Talk to Sales" option for Enterprise interest
- **Same-day calls likely** - keep calendars clean!
- After booking, prospect gets instant Business trial access

### Round-Robin Setup
- Contact Owner determines which AE link to use
- BDR can "Assign AE Owner" during qualification call
- AE assignment workflow runs on meeting booking

---

## Lead Routing & Assignment

### Routing Logic
1. **By Region**: East Coast, West Coast, EU
2. **By Company**: If company has existing owner, contact goes to same owner
3. **Round-Robin**: Within region, rotate between AEs

### BDR Owner Assignment
- BDR owner assigned at routing time
- If no company association, keeps original BDR owner
- Paired BDR based on AE assignment

### Ownership Rules
- **Contact Owner** = AE
- **BDR Owner** = You (for your leads)
- **Don't change owners yourself** - ask Hsio/Jerel
- **Deal ownership** follows company/contact ownership

### UK Routing Update
UK leads now route to East team (NYC + Dermott) for load balancing.

### Common Routing Issues
1. **Multiple contacts created quickly**: Overwrites until last one finishes
2. **Missing enrichment**: Country/region defaults to "Unknown"
3. **Duplicate contacts**: Same person, different emails - hard to catch

---

## Swag Program

### How to Send Swag
Two methods:
1. Enroll contact in `Sales Swag Request` workflow
2. Set `request_kotis_swag` property = TRUE

### Guidelines
- **Up to 5 swags per week** per BDR
- Focus on **contacts in trial**
- Use strategically to:
  - Get meetings booked
  - Move deals forward
  - Re-engage cold leads

### Tracking
- Code redemption tracked automatically
- Impact on trial conversion measured
- Kotis link populated back to HubSpot contact

### Swag Email Example
Automated email sends with redemption link. Can track if they redeem.

---

## Instantly (Cold Email)

### Account Setup
- Each BDR has multiple email accounts
- Accounts need warmup before use
- Forward replies to your main MotherDuck address

### Email Forwarding Setup
1. Log into each Gmail account (credentials in spreadsheet)
2. Add profile image
3. Set up forwarding to your @motherduck.com
4. Create filter to exclude warmup emails (use mailbox-specific code)

### Account Distribution
- Rebalanced periodically for fairness
- New accounts need warmup time
- Monitor deliverability (2% open rate = problem)

### Blacklisting
Upload domains to Instantly blacklist:
- Partners
- Competitors
- Existing customers with deals

### Common Issues
- "Email denied" errors often from warmup emails
- Check Instantly analytics for send issues
- Contact support (slow response)

---

## Common Room Integration

### Intent Signals Monitored
Keywords tracked:
- "snowflake bills"
- "snowflake alternative"
- "cost-efficient data warehouse"
- "motherduck"
- "duckDB"
- "duckLake"

### Platforms Monitored
- Reddit
- Twitter
- Public Slack
- Discord
- LinkedIn

### Action Items (Setup)
1. Suppress current customers once field mapped
2. Suppress partners
3. Re-connect internal Slack workspace
4. Define scoring model priorities

### Outbound Targets
Access at: `app.commonroom.io/community/2330-mother-duck/segment/8430822-outbound-targets`

---

## Battle Cards & Resources

### Battle Cards Created
| Competitor | Status | Location |
|------------|--------|----------|
| Snowflake | Complete | Guru |
| ClickHouse | Complete | Guru |
| Databricks | Complete | Guru |
| DuckDB (self-hosted) | Complete | Guru |
| Redshift | Complete | Guru |
| Postgres | Complete | Guru |
| BigQuery | In Progress | - |
| Fabric/Synapse | Needed | - |

### Other Resources
- **Pipeline Factory Deck**: Updated presentation
- **Sequence & Convert Doc**: 25 cold email templates by ICP/use case
- **Re-engagement Sequence**: For old leads not sequenced in a while

### LinkedIn Plays
**Puzzle Game Icebreaker**:
- Play LinkedIn puzzle games
- Use as icebreaker with connected prospects
- "I beat you today!" or "Great score on the leaderboard!"

---

## Performance Tracking

### Key Metrics
| Metric | Target | Notes |
|--------|--------|-------|
| SQAs (Sales Qualified Appointments) | Track weekly | Competition between BDRs |
| Reply Rate | 10%+ cold, 20%+ warm | Auto-seq often higher |
| Meeting Rate | Similar across methods | |
| Acceptance Rate | Dashboard metric | New addition |

### Weekly Tracking
- Pipeline Party summaries shared
- Track calling activity
- Monitor sequence performance

### MCP Server Analytics
Use Claude MCP server to analyze sequence performance:
- Pulls by Sequence ID (lookup name in URL)
- Creates executive dashboards
- Useful for quarterly reviews

---

## Troubleshooting Common Issues

### Contact Not Routed Correctly
1. Check if enrichment completed (5+ min delay)
2. Verify country/region populated
3. Check for duplicate contacts
4. Ask Hsio to investigate workflow

### Sequence Not Sending
1. Verify A/B test is turned ON (not default!)
2. Check if contact was already sequenced <14 days ago
3. Verify contact not suppressed
4. Check HubSpot for errors

### Deal Not Created
1. Meeting must have "Intro to Motherduck" or "<> MotherDuck"
2. Meeting must NOT have "tentative"
3. Contact must not have existing open deal
4. Check automation logs

### Calendly Booking Issues
1. Check AE/CE availability
2. Verify correct pairing link used
3. Rogue Calendly links may exist - flag to ops

### Calls Not Recording
1. Check if dual-consent state/country
2. Manual record button required in some cases
3. Verify HubSpot calling enabled

### Lead in Wrong BDR's List
1. Check if company owner changed
2. Verify BDR owner field
3. Don't change yourself - ask ops

---

## LinkedIn Enrichment Tips

### Finding Missing LinkedIn Profiles
When enrichment doesn't find LinkedIn:
1. Search Apollo manually
2. Search LinkedIn directly
3. Update contact record

### LinkedIn Hyperlink in HubSpot
LinkedIn profile link now added automatically - huge time saver!

---

## Omni BDR Show & Tell (Jan 2026)
Scheduled session with Omni BDR team to learn their LinkedIn tactics:
- They've had success driving meetings via LinkedIn
- Testing new approaches for MotherDuck BDRs

---

## Key Quotes & Reminders

> *"Personalization is THE WAY TO GO - mass sequencing was 10x less effective"* (from BDL learnings)

> *"Event leads go cold faster than anything else"*

> *"Little ways to show you're human make a big difference at scale"*

> *"Level 2 Pain" is what converts - dig deeper in discovery*

> *"If you are worried about important things getting missed, share here and we can create alerts"*

---

## Quick Reference: Who to Ask

| Topic | Contact |
|-------|---------|
| HubSpot workflows | Hsio |
| Lead routing | Hsio |
| Enrichment | Jerel |
| Calendly setup | Jerel/Hsio |
| Sequences | Collaborate with team |
| Instantly | Jerel |
| Swag | Jerel |
| Events/Marketing | Marketing sync |

---

*Last updated: January 2026*
*Source: #team-bdr Slack Channel*
