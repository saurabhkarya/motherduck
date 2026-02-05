
- **Introduction:**
    
    Hey this is Arya I'm growing the product team at MotherDuck.
    
    I saw you signed up for an account for MotherDuck - just wanted to see what brought you to use MotherDuck and what you're working on at the moment?
    
    I saw you downloaded our guide -  just wanted to see what brought you to use MotherDuck and what you’re working on and how it was working for you
    
    do you have time for a 30-second chat?
    
- **Value Proposition:**
    
    We're trying to make MotherDuck both simple, fast and affordable by letting people run SQL locally with DuckDB and only scale to the cloud when it’s needed so people can get answers without the cost, complexity or overhead of traditional data warehouses like Snowflake or Bigquery .etc
    
- **Discovery Question:**
    
    Out of curiosity,
    - How are you managing your data right now, where is stored and what's your stack?
    - What are you using for your data solution?
        - What’s going well and what’s not going well?
    - when someone on your team has a new data question, can you walk me through what actually happens from the moment they have the question to getting an answer
    - What does your system look like when it comes to managing your data?
    - Who touches the data before it becomes useful?

**Problems**

- **Slow:**
    
    What part usually takes the longest?
    
    Waiting seconds, minutes or longer?
    
    What usually happens when people are waiting?
    
    _**Result: Context switching, abandoned questions, fewer follow-ups**_
    
    **Reframe:**
    
    Most teams don’t realize how much speed they’ve given up until they get it back.
    
    **It might be worth trying to:**
    
    look at whether your analytics engine is built for interactive queries
    
    **What motherduck does:**
    
    We can run analytics with DuckDB locally and scale to the cloud when needed
    
    **What it changes:**
    
    That means faster answers → more questions asked → better decisions
    
- **Cost:**
    
    Do people ever hesitate to run certain queries because of cost?
    
    Does that mean fewer queries, fewer dashboards, or fewer experiments?
    
    Who feels that paint the most?
    
    _**Result: Analyst hestiation, finance pressure, reduced exploration**_
    
    **Reframe:**
    
    Cost only becomes a problem when it changes how people behave.
    
    **It might be worth trying to:**
    
    use an analytics setup that’s efficient enough so people don’t have to think about cost before exploring data
    
    **What motherduck does:**
    
    Uses scale-up compute instead of expensive scale-out warehouses.
    
    **What it changes:**
    
    Lower cost → experimentation comes back → analytics becomes useful
    
- **Complex:**
    
    Who understands the flow end-to-end?
    
    If that person was out for a week what would break?
    
    How long does it take someone new to feel productive
    
    _**Result: Tribal knowledge, risk, onboarding pain.**_
    
    **Reframe:**
    
    When only a few people understand the system, it becomes a bottleneck not a tool.
    
    **It might be worth trying to:**
    
    simplifying the analytics layer so people can understand and use it without fear of breaking things
    
    **What motherduck does:**
    
    We can provide a simple SQL first analytics model with fewer moving parts
    
    **What it changes:**
    
    That means lower cofnigitve load → faster onboarding → less dependency on specialists
    
- **Postgres/Production:**
    
    How do you make sure analytics doesn’t slow down the production workloads?
    
    Has there ever been an issue
    
    _**Result: read replicas, query limits, performance scares**_
    
    **Reframe:**
    
    Postgres if great at transcations, analytics is just a different job.
    
    **It might be worth trying to:**
    
    separating analytics from production so heavy queries don’t complete with live traffic
    
    **What motherduck does:**
    
    offload analytics off postgres into an engine designed for analytics
    
    **What it changes:**
    
    production stays fast → ananlytics run faster → fewer incidents
    
- **Refresh nightly jobs**
    
    What decisions are being made on yesterday’s data?
    
    What would change if the data was available sooner?
    
    _**Result: Delayed decisions, missed opportunities, AI/Experimentation blockers**_
    
    **Reframe:**
    
    It’s not about real-time it’s about relevance.
    

**Second Discovery:**

- If you could wave a magic wand and everything worked perfectly what would that look like?

**Quantify:**

- What is that impact to your business and work with that, is that a big deal or a small problem?

**Objections (accept first):**

- **We’re not really looking for anything right now**
    
    Most teams we talk to aren’t, I’m not trying to sell you anything today just want to see if it would be useful to test your setup to see if it’s the simplest and cheapest way to get answers, or would that be a waste of time?
    
- **We already use Snowflake/Big Query**
    
    I’m not suggesting you rip anything out, I’m just saying let’s take a look for workloads that don’t belong there
    
    Are there any queries you avoid running because of cost or speed?
    
- **Migration sounds painful**
    
    That hesitation makes sense, what’s different here is teams usually start alongside what they already have so there’s no big migration.
    
- **Postgres is fine**
    
    It usually is until analytics and production start competing, I just want to understand if that’s a risk for you yet?
    
- **It’s too early**
    
    That’s fair what would ready look like in your mind?
    
- **We already have something in place**
    
    Totally fair, lots of teams do, this is a very quick sanity check to see if there’s any incremental lift we can add - would it be crazy just to take a look?
    
- **I’m busy**
    
    100% I figured that - that’s why I’m calling you now instead of sending another email. Is there a better time to chat this week or I can follow up next week?
    
- **Just send me more info**
    
    More than happy to - I’ll send you a short email and if it’s interesting to you I’ll give you another call and we can work out next steps from there - sound good?
    
- **We don’t need this**
    
    That is totally fair - this might not be a priority for you - the goal of the intro call is really just to confirm whether there’s any incremental lift at all you might be missing - if there isn’t you’ll know quickly.
    
    I just want to get you on the calendar to not waste any more of your time if this isin’t a fit for you?
    
- **No problems**
    
    I’m not really 100% sure how we can help you, but we have a really great software and I know we would add a lot of value to you, let’s get something on the calendar and I can get one of our executives to find out quickly.
    
- **Works Fine:**
    
    What’s the annoying part of that - even if it;s small?
    

**Hard Objection**

- **We’re good - not interested**
    
    Totally fair - that’s actually helpful feedback, before I let you go can I ask you one thing - what would need to change for this to become painful enough to revist.
    
    If that starts happening, woudl it be useful to already know what options exist?
    

**Pre-close:**

**“It might be worth pressure-testing whether there’s a simpler, faster way to get answers without adding cost or risk.”**

**Close:**

Rather than me trying to explain this over a quick call like this, the next step would be to schedule in a 20 minute call with one of our executives to see if this would be relevant for your team, does it makes sense to explore that?

Are you in front of your laptop? I’ve just sent you a calendar invite with X just let me know if you got it and I’ll lock you in for a quick call.