# Mock Call Review: Ashley (Rushed/Postgres User)

**Date:** February 2026
**BDR:** Arya
**Prospect:** Ashley (busy, referred by former colleague)
**Current Stack:** Postgres + dbt + Power BI
**Outcome:** Tentative meeting (weak commitment)

---

## Call Summary

Ashley was clearly rushed from the start. Downloaded MotherDuck guide, referred by former colleague. Running internal/customer analytics on Postgres which "chokes" on anything over 6 months of data. Got a tentative meeting but weak commitment ("I'll see if it makes sense").

---

## What You Did Well ✅

| Moment | What You Did | Playbook Reference |
|--------|--------------|-------------------|
| **Handled busy prospect** | "Do you have 30 seconds?" | Good pivot to buy time |
| **Trigger-based opening** | "I saw you downloaded our guide" | [Master Discovery §1](../Calls_Playbook.md#1-how-to-open-the-call) |
| **Got tech stack** | Postgres, dbt, Power BI | [First Level Discovery](../Calls_Playbook.md#2-first-level-discovery) |
| **Good pain probe** | "How's it been running on Postgres?" | [Level 1 Pain](../Calls_Playbook.md#3-level-1-pain-what-is-the-need) |
| **Uncovered real pain** | "Anything over 6 months chokes" | Gold! This is the pain |
| **Connected the dots** | "Is that why you decided to explore MotherDuck?" | Good confirmation |
| **Mentioned integration** | "We integrate with Postgres and dbt pretty well" | Brief positioning |
| **Kept pushing for meeting** | Got tentative yes | Persistent |

---

## What to Improve 🔧

### 1. She Was Rushed—You Should Have Offered to Call Back Earlier

**What happened:** She said "in the middle of something" and "really got to hop" multiple times. You kept pushing.

**The problem:** When someone is rushed, they're not in discovery mode. You got surface info but no depth, and the meeting commitment is weak.

**What to do instead:**
```
HER: "I'm kind of in the middle of something."

YOU: "Totally get it. Hey, sounds like you downloaded our guide—
      I'd love to hear what you're working on. When's a better
      time for a quick 5-minute call? Tomorrow morning work?"
```

**Or after getting initial pain:**
```
HER: "Anything over 6 months chokes... I really gotta hop."

YOU: "That's a real problem we solve. Hey, I can tell you're
      slammed—let me send you a calendar link and you pick a
      time that works. I'll make sure we have the right people
      on to help with exactly that Postgres issue. Sound good?"
```

**Playbook:** When they're rushed, get the callback scheduled and let them go. A relaxed 10-minute call beats a rushed 3-minute call.

---

### 2. You Got Pain But Didn't Go to Level 2

**What happened:** She gave you gold—"anything over 6 months chokes"—but you didn't dig into why it matters.

**What you said:**
> "You're onto something there."

**What to say instead:**
```
"Six months and it chokes—that's painful. What happens when
you need to look at older data? Are you just... not able to?"

"Who's impacted when queries slow down? Is this blocking
customer-facing stuff or internal reporting?"
```

**Playbook:** [Master Discovery §4 - Level 2 Pain](../Calls_Playbook.md#4-level-2-pain-why-does-it-matter)

---

### 3. No Real Positioning

**What happened:** You mentioned "we integrate with Postgres and dbt" but didn't explain WHY MotherDuck is better.

**What you said:**
> "A cloud data warehouse solution is probably a good idea."

**What to say instead:**
```
"Yeah, Postgres choking on 6 months is exactly why teams
move analytics to MotherDuck. You keep Postgres for
transactions, but analytics runs on us—way faster, handles
years of data no problem, and we plug right into your
dbt setup. Takes that load completely off Postgres."
```

**Playbook:** [Master Discovery §5 - Positioning](../Calls_Playbook.md#5-motherduck-positioning)

---

### 4. The Close Was Weak

**What happened:** You got a "tentative" meeting and she said "I'll see if it makes sense."

**What she said:**
> "If you want to send me a calendar invite, I'll see if it makes sense, but I do gotta go."

**The problem:** This is not a commitment. She's likely to no-show or decline.

**Better close:**
```
"I hear you, you're slammed. Tell you what—I'll send a
15-minute slot for Tuesday. If it doesn't work, just let
me know and we'll find another time. But I think it's
worth it given that Postgres issue. Deal?"
```

**Or even better—get a specific time:**
```
"Tuesday work? Morning or afternoon better for you?"

[Get specific time]

"Perfect. I'll send the invite now. You'll see it from me—
Arya at MotherDuck. Talk Tuesday."
```

**Playbook:** [Master Discovery §7 - Book the Meeting](../Calls_Playbook.md#7-book-the-meeting)

---

### 5. You Didn't Get Sizing or Authority

**What happened:** No data volume question, no authority question.

**Questions you missed:**
```
"Quick question—how much data are we talking about?
Like how many months/years do you need to query?"

"Who else would be involved if you decided to move
analytics off Postgres?"
```

**Playbook:** [Discovery Questions - Sizing](../../QUICK_REFERENCE/03_Discovery_Questions.md#phase-3-sizing--fit-1-2-minutes)

---

## Revised Call Flow (Rushed Prospect)

When someone is clearly rushed, adjust your approach:

```
HER: "I'm in the middle of something."

YOU: "Totally get it—30 seconds?"

HER: "Yeah, 30 seconds."

YOU: "Cool. Saw you downloaded our guide. What are you working on?"

HER: "Internal analytics, Postgres, dbt..."

YOU: "Got it. How's Postgres handling the analytics load?"

HER: "Anything over 6 months chokes. I really gotta go."

YOU: "That's exactly what we solve. Hey, you're slammed—
      let me do this: I'll send you a 15-minute slot with
      our team for next week. They'll show you how to get
      that Postgres pain solved fast. You pick the time
      that works. Deal?"

HER: "Sure, send it over."

YOU: "Done. You'll see it from Arya at MotherDuck.
      Talk soon—go handle your thing."
```

**Key difference:** Respect their time, get the commitment, let them go.

---

## Score Card

| Criteria | Score | Notes |
|----------|-------|-------|
| Opening | 7/10 | Good trigger, handled busy okay |
| Level 1 Discovery | 7/10 | Got tech stack and surface pain |
| Level 1 Pain | 8/10 | "6 months chokes" is gold |
| Level 2 Pain | 2/10 | Didn't dig into why it matters |
| Positioning | 3/10 | Mentioned integration but no real positioning |
| Authority Qualification | 1/10 | Didn't ask |
| Sizing | 1/10 | Didn't ask |
| Objection Handling | 5/10 | Handled "busy" okay but kept pushing |
| Close | 4/10 | Tentative meeting, weak commitment |
| **Overall** | **5/10** | Got pain, but weak close and no depth |

---

## Key Takeaways

### What Worked
- You got real pain: "Postgres chokes on 6+ months"
- You got tech stack: Postgres, dbt, Power BI
- You were persistent

### What to Fix
1. **When they're rushed, get the callback and let them go.** A tentative meeting from a rushed prospect often no-shows.
2. **Even in 30 seconds, position briefly:** "That's exactly what we solve—we take analytics load off Postgres."
3. **Get a real commitment:** Specific day/time, not "I'll see if it makes sense."

---

## Compare to Call #1 (Ashley - Snowflake)

| Metric | Call #1 (Snowflake) | Call #2 (Postgres) |
|--------|---------------------|-------------------|
| Prospect state | Available | Rushed |
| Pain uncovered | Cost, surprise bills, slow | 6+ months chokes |
| Positioning | None | Minimal |
| Level 2 pain | None | None |
| Close strength | Strong (specific time, bringing boss) | Weak (tentative) |
| Overall | 6/10 | 5/10 |

**Pattern:** You're good at uncovering Level 1 pain but skip Level 2 and positioning in both calls.

---

## Areas to Practice

1. **Handling Rushed Prospects** - Get callback scheduled, respect their time
2. **Level 2 Pain** - [Master Discovery §4](../Calls_Playbook.md#4-level-2-pain-why-does-it-matter)
3. **Quick Positioning** - [Master Discovery §5](../Calls_Playbook.md#5-motherduck-positioning)
4. **Stronger Closes** - [Master Discovery §7](../Calls_Playbook.md#7-book-the-meeting)

---

## Call Transcript

**Arya:** Hey, Ashley?

**Ashley:** Yeah.

**Arya:** Hey, this is Arya from Mother Duck. How have you been?

**Ashley:** I'm kind of in the middle of something. What's this about?

**Arya:** Yeah, no worries. Do you have 30 seconds on you right now?

**Ashley:** Yeah, I can do 30 seconds, but really gotta hop.

**Arya:** Okay, great. Yeah, I just saw that you downloaded our guide for using Mother Duck. Just curious what you're working on at the moment.

**Ashley:** Yeah, just some internal analytics, nothing really crazy.

**Arya:** Okay, interesting. What kind of analytics are you looking at?

**Ashley:** Um, some customer stuff. Like I said, nothing crazy, haven't had a chance to spin anything up, but a former colleague recommended you guys to me.

**Arya:** Oh, awesome. Okay, great. So in terms of not having anything to spin up yet, what would sort of help you get going with Mother Duck?

**Ashley:** More time. Can you give me that?

**Arya:** Yeah, yeah, definitely. Hey, listen, I think the best approach here, I know that you are in the middle of something. So I won't waste your time here, but generally, it's a lot faster for someone to jump on a call with a couple of experts at our company and they can walk you through exactly what you need for your customer facing analytics completely for free, of course. Would that be something interesting to you?

**Ashley:** Potentially. Like I said, really strapped for time, so not sure I have bandwidth at the moment.

**Arya:** That's completely fine. Would you be free next week? I totally understand you're strapped for time. This is actually like, this is what a lot of people say. It's the easiest way to actually get up to speed quickly rather than trying to play around with it yourself and sort of kicking tires.

**Ashley:** Yeah, maybe. Who's on the call? What would it be into exactly?

**Arya:** So what I'll do is I'll pair you with someone from the product team and someone also very technical from our engineering team. And they'll essentially just help you with how you want to architect your MotherDuck and give you the best use case for that. So just out of curiosity, you're trying to run customer analytics. What were you previously doing for customer analytics?

**Ashley:** Yeah, our stack right now is Postgres, dbt. So just trying to spin something up. I know we use a BI tool, maybe Power BI. Yeah.

**Arya:** Yeah, okay. Interesting. And how has it been running on Postgres? I understand, you know, analytics is not normally done on Postgres, but what's your experience been like?

**Ashley:** It's been fine. Yeah, it's been okay.

**Arya:** Yeah, I mean, Postgres itself is like quite great for transactions, but analytics usually is a bit of a different job. Is that why you decided to explore Mother Duck?

**Ashley:** You know, yeah, with Postgres, anything, you know, over six months of data kind of chokes, so...

**Arya:** You're onto something there. Yeah, okay, cool. Yeah. I mean, a cloud data warehouse solution is probably a good idea. And we actually integrate with Postgres and dbt like pretty well. So we can just get that sort of transition over pretty quickly. Has there been like an incident where some sort of heavy query impacted your application that you were running?

**Ashley:** You know, I really gotta hop.

**Arya:** Totally.

**Ashley:** But there's— Yeah, I don't want to cut you off, but pretty much what you're saying—

**Arya:** That's totally fine. Hey, listen, do you have some time on Tuesday next week? I'll just get you a meeting with those two people that I mentioned and they'll be able to save your time.

**Ashley:** If you want to send me a calendar invite, I'll see if it makes sense, but I do gotta go. Appreciate you calling now.

**Arya:** No worries, no worries. I'll put us tentative right now and then I'll give you a call back and we'll just confirm the time when you can.

**Ashley:** Okay, yeah, that sounds good.

**Arya:** Great. Thank you. Bye.

---

*Review created: February 2026*
