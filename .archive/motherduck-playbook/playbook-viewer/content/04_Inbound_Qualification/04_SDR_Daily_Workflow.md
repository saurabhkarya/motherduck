# SDR Daily Workflow & Time Prioritization

A structured daily workflow to maximize productivity and ensure no high-value leads fall through the cracks.

---

## Daily Workflow Overview

### Morning Routine

| Priority | Task | Tool/Channel |
|----------|------|--------------|
| 1 | Post "Notable Leads of the Day" | #team-sales |
| 2 | Sequence new leads from Contact List Views | HubSpot |
| 3 | LinkedIn connection requests to leads | LinkedIn/SalesNav |
| 4 | Check Community Slack notifications | MotherDuck Community |
| 5 | Handle all responses | Email, LinkedIn, Slack |

---

## Contact List Views (Work These Daily)

Sequence new leads from these HubSpot Contact List Views in priority order:

| List | Priority | Qualification Focus |
|------|----------|---------------------|
| **Signups** | Recency | Company size & role |
| **DuckDB ebook** | Recency | Company size & role |
| **Web visits** | Recency | Company size & role |
| **Usage** | Activity level | Company size & role |
| **Free Trial Ending Soon** | Urgency | Conversion potential |

---

## LinkedIn Outreach Workflow

### For Known LinkedIn URLs
1. Add known LinkedIn URLs directly in LinkedIn
2. Send connection request with personalized note

### For Unknown LinkedIn URLs
1. Search via SalesNav using name + company
2. Find the correct profile
3. Send connection request

### Double-Tap Strategy
For prospects who accepted connection but didn't reply:
- Wait 2-3 days after acceptance
- Send a follow-up message referencing their acceptance
- Keep it casual and value-focused

---

## Community Slack Monitoring

### When New Members Join
1. Check Community Slack notifications for new leads
2. Reach out via Community Slack with a helpful, non-salesy message
3. Find them on LinkedIn and send connection request
4. Note their activity/questions in HubSpot

### Sample Community Outreach
```
Hey [Name]! Welcome to the MotherDuck community!

Saw you just joined - curious what brought you here?
Happy to help if you have any questions about getting started.
```

---

## Response Handling

### Email Responses
- Prioritize same-day response
- Qualify based on response content
- Book meeting if qualified, nurture if not

### LinkedIn Responses
- Respond within 4 hours during business hours
- Move conversation to call/meeting quickly
- Don't over-message on LinkedIn

### Community Slack Responses
- Be helpful first, sales second
- Answer technical questions when possible
- Loop in product/engineering for complex questions

### SalesNav Responses
- Check InMail responses daily
- Follow up on any engagement signals

---

## Follow-Up on Ghosted Prospects

### Calendar Tasks
- Review calendar tasks daily for follow-up reminders
- Re-engage with new value (case study, feature, event)
- Try different channel if original isn't working

### Re-engagement Tactics
1. Share relevant case study
2. Mention new feature release
3. Invite to upcoming webinar/event
4. Send relevant blog post
5. Light humor/GIF if relationship allows

---

## WarmBound Strategy

For signup & ebook leads, expand within the same company:

### Process
1. Identify additional prospects at the same company
   - Other data engineers
   - Technical founders
   - CTOs
   - Software engineers (if data app use case suspected)

2. Multi-channel outreach:
   - Send LinkedIn connection requests with personalized note
   - Add to HubSpot sequence OR send direct email

3. Reference the existing contact:
   ```
   "Noticed your colleague [Name] has been exploring MotherDuck
   for [use case]. Thought you might find it interesting too
   given your work on [relevant project/area]."
   ```

---

## Pure Cold Outbound

### Target Account Assignment
| Vertical | Owner |
|----------|-------|
| Logistics | Clark |
| FinTech | Weyman |

### Cold Outbound Workflow

1. **Check Target Account List**
   - Review assigned vertical accounts
   - Prioritize based on company signals

2. **Create Campaign/Sequence in Instantly**
   - Leverage technology research for each account
   - Personalize based on their stack

3. **Sample Cold Messaging**
   ```
   "I was looking at [Company], saw you're using [tech stack/tools].

   We work with a lot of similar [fintech/logistics] companies.
   Check out how [Reference Company] is using MotherDuck to [specific benefit].

   [Insert case study link]

   Curious to get your feedback/thoughts."
   ```

   **Alternative opener:**
   ```
   "Saw your team is using [tools] for [specific data use case]..."
   ```

4. **Create SalesNav Lead List** for each account

5. **Send LinkedIn Connection Requests** manually for each prospect

6. **Find Emails via Clay Extension**
   - Push to Clay Cold Outbound Table
   - Use appropriate table (Weyman's or Clark's)

7. **Upload to Instantly**
   - Copy emails from Clay table
   - Upload via "Leads" tab → "Add leads" → "Emails manually"
   - Assign to appropriate campaign (FinTech or Logistics)

### Case Study References

**FinTech:**
> "Kultura Capital is using MotherDuck to streamline their investment portfolio analytics and reduce query times from hours to seconds."

---

## Website Visitor Follow-Up Flow

### For Qualified Website Visitors
1. Go to HubSpot Buyer Intent
2. Navigate to "Saved Views"
3. Click "Enroll in Workflow"
4. Select "Send companies to list for Clay (web visitors)"
5. Check Instantly.ai for replies
6. In parallel: Send LinkedIn connection requests

### Monitoring Channels
| Source | Channel/Location |
|--------|------------------|
| All website visitors | #syft-notifications |
| New Slack community contacts | #hubspot-notifications |
| Pricing page viewers | HubSpot list |

---

## Bucket Prioritization Framework

### 1. Demand (Ebook Downloads)
- **Prioritize by**: Recency
- **Qualify on**: Company size & role
- **Action**: Sequence immediately, LinkedIn connect same day

### 2. Signups
- **Prioritize by**: Recency
- **Qualify on**: Company size & role
- **Action**: Call within 10-20 minutes if possible

### 3. Free-Tier & Older Self-Service
- **Prioritize by**: Company size, role, AND usage
- **Qualify on**: Expansion potential
- **Action**: Check usage data before outreach

### 4. Web Visits / Warm Intent
- **Prioritize by**: Company size, role, AND recency of engagement
- **Qualify on**: Repeated visits, pricing page views
- **Action**: Strike while hot, same-day outreach

### After Working Inbound Lists
**Go Outbound**: Add the right contacts for outbound:
- Data Engineers
- Technical Founders
- CTOs
- Software Engineers (if data app use case suspected)

---

## Special Lists & Actions

### Pricing Page Viewers
- High intent signal
- Prioritize for same-day outreach
- Check company size before reaching out

### LinkedIn Scraping
Monitor and scrape engagement from:
- MotherDuck posts
- DuckLake posts
- DuckDB posts

### Omni List
- Ask Scott for best course of action
- May require special handling

---

## Daily Checklist

### Start of Day
- [ ] Review Contact Us form submissions (email notifications)
- [ ] Check Signups HubSpot list
- [ ] Check Demand (ebook, webinars) HubSpot list
- [ ] Check Usage HubSpot list
- [ ] Check Website activity list
- [ ] Review #syft-notifications
- [ ] Check #hubspot-notifications for new Slack community contacts

### Throughout Day
- [ ] Handle all responses within 4 hours
- [ ] Send LinkedIn connections to all new qualified leads
- [ ] Monitor Community Slack
- [ ] Follow up on ghosted prospects (calendar tasks)

### End of Day
- [ ] Post notable leads to #team-sales
- [ ] Update HubSpot with all activity
- [ ] Clear task queue
- [ ] Plan tomorrow's priority outreach

---

## Key Metrics to Track

| Metric | Daily Target |
|--------|--------------|
| Leads sequenced | 20+ |
| LinkedIn connections sent | 15+ |
| Calls made | 10+ |
| Responses handled | All same-day |
| Notable leads posted | 3-5 |
