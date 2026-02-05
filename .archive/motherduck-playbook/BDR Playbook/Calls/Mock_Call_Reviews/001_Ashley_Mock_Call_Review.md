# Mock Call Review: Ashley (Snowflake User)

**Date:** February 2026
**BDR:** Arya
**Prospect:** Ashley (boss asked her to evaluate)
**Current Stack:** Snowflake
**Outcome:** Meeting booked (Wednesday 2pm, bringing boss)

---

## Call Summary

Ashley signed up for MotherDuck trial but hadn't used it yet. Her boss asked her to check it out. Currently on Snowflake with "no real issues" but revealed cost concerns, surprise bills from overnight queries, and slow queries. Meeting booked with SA team.

---

## What You Did Well ✅

| Moment | What You Did | Playbook Reference |
|--------|--------------|-------------------|
| **Opening** | Trigger-based: "I saw you signed up" | [Master Discovery §1](../Calls_Playbook.md#1-how-to-open-the-call) |
| **First Discovery** | "What prompted you to download?" | [Master Discovery §2](../Calls_Playbook.md#2-first-level-discovery) |
| **Probed on boss** | "What did your boss want you to check out?" | Good qualification instinct |
| **Uncovered pain** | Got her to reveal: cost, surprise bills, slow queries | [Level 1 Pain](../Calls_Playbook.md#3-level-1-pain-what-is-the-need) |
| **Good pivot** | "Is there anything you're NOT doing because of cost?" | Smart reframe |
| **Assumptive close** | "Are you free Wednesday at 2pm?" | [Master Discovery §7](../Calls_Playbook.md#7-book-the-meeting) |
| **SA session as value** | "Get you started with experts instead of kicking tires" | [Winning Talk Tracks](../Calls_Playbook.md#offering-sa-session) |
| **Multi-threading** | She's bringing her boss | Decision maker access |

---

## What to Improve 🔧

### 1. You Skipped Positioning Entirely

**What happened:** You went straight from pain → booking without explaining why MotherDuck matters.

**What to do:** After she revealed pain (cost, surprise bills, slow queries), you should have positioned:

```
"Yeah, that's actually why a lot of teams come to us from Snowflake.
MotherDuck is fundamentally different—instead of big distributed
warehouses, each user gets isolated compute. Serverless, sub-100ms
cold starts, and for 99% of workloads, faster and way less expensive.

That's probably worth exploring given what you mentioned about surprise bills."
```

**Playbook:** [Master Discovery §5 - Positioning](../Calls_Playbook.md#5-motherduck-positioning)

---

### 2. You Didn't Go to Level 2 Pain

**What happened:** She gave you gold—"surprise bills" and "slow queries"—but you didn't dig into WHY it matters.

**What you said:**
> "Okay, so it's more the queries driving the cost?"

**What to say instead:**
```
"Surprise bills from queries running all night—that's painful.
What happens when those bills come in? Is that causing friction
with finance, or is it more about not knowing what to budget?"

"You mentioned slow queries too—who feels that pain day-to-day?
Is that blocking work or just annoying?"
```

**Playbook:** [Master Discovery §4 - Level 2 Pain](../Calls_Playbook.md#4-level-2-pain-why-does-it-matter)

---

### 3. You Didn't Qualify Authority

**What happened:** She said "my boss wanted me to check it out" and "this would be a better conversation with my boss" twice. You didn't qualify who the decision maker is.

**What to ask:**
```
"Totally makes sense to loop in your boss. What's their role—
are they the one who'd make the call on something like this?"

"Who else would need to be involved if you did decide to switch?"
```

**Playbook:** [Discovery Questions §4 - Decision Process](../../QUICK_REFERENCE/03_Discovery_Questions.md#phase-4-decision-process-1-2-minutes)

---

### 4. You Didn't Get Sizing Info

**What happened:** You never asked about data volume. This is key for qualification.

**What to ask:**
```
"Quick question—do you know roughly what your data volume is?
Like how much data are you querying in Snowflake?"
```

**Playbook:** [Discovery Questions §3 - Sizing](../../QUICK_REFERENCE/03_Discovery_Questions.md#phase-3-sizing--fit-1-2-minutes)

---

### 5. "No Real Issues" Was a Buying Signal You Almost Missed

**What happened:** She said "no real issues" but then immediately said "it's expensive." You could have probed harder here.

**Better response to "no real issues":**
```
"That's good to hear. So if cost wasn't a factor, you'd stick
with Snowflake forever? Or are there things you wish were different?"
```

**Playbook:** [Objection Responses - Snowflake](../../QUICK_REFERENCE/02_Objection_Responses.md#we-already-use-snowflake)

---

## Revised Call Flow

Here's how the middle of the call could have gone:

```
YOU: "How's Snowflake been working out?"

HER: "No real issues... expensive though... surprise bills...
      slow queries..."

YOU: "Surprise bills from queries running all night—what happens
      when those come in? Finance give you grief, or is it more
      about unpredictable budgeting?"

HER: [Reveals deeper pain]

YOU: "Got it. And the slow queries—who feels that day-to-day?"

HER: [Reveals impact]

YOU: "Makes sense. So here's why teams like yours come to us—
      MotherDuck is fundamentally different. Each user gets
      isolated compute, serverless, sub-100ms cold starts.
      For 99% of workloads, faster and way cheaper. No surprise
      bills because you pay for seconds of compute, not reserved
      capacity.

      Given what you mentioned, probably worth exploring.
      What if we got you and your boss in front of our team
      Wednesday at 2pm to dig in properly?"
```

---

## Score Card

| Criteria | Score | Notes |
|----------|-------|-------|
| Opening | 7/10 | Trigger-based, but "how have you been" is filler |
| Level 1 Discovery | 8/10 | Good questions, got context |
| Level 1 Pain | 7/10 | Uncovered pain but didn't dig deep |
| Level 2 Pain | 3/10 | Skipped entirely |
| Positioning | 1/10 | Didn't position MotherDuck at all |
| Authority Qualification | 4/10 | Knew boss was involved, didn't qualify |
| Sizing | 2/10 | Didn't ask |
| Objection Handling | 6/10 | Handled "kicking tires" okay |
| Close | 9/10 | Assumptive, got the meeting, she's bringing boss |
| **Overall** | **6/10** | Meeting booked, but left intel on the table |

---

## Key Takeaway

**You're good at getting to the close.** But by skipping positioning and Level 2 pain, the SA team going into that meeting doesn't know:
- Why she's actually interested (beyond "boss told me")
- How painful the surprise bills really are
- What data volume they're working with
- Who the real decision maker is

**Next time: Slow down after pain is revealed. Go to Level 2. Position. Then close.**

---

## Areas to Practice

1. **Level 2 Pain Discovery** - [Master Discovery §4](../Calls_Playbook.md#4-level-2-pain-why-does-it-matter)
2. **Positioning by Persona** - [Master Discovery §5](../Calls_Playbook.md#5-motherduck-positioning)
3. **Authority Qualification** - [Discovery Questions](../../QUICK_REFERENCE/03_Discovery_Questions.md#phase-4-decision-process-1-2-minutes)
4. **Snowflake Objection Handling** - [vs. Snowflake Battlecard](../../06_Competitive_Intel/01_vs_Snowflake.md)

---

## Call Transcript

**Arya:** Hey, Ashley, this is Arya from Mother Duck. How have you been?

**Ashley:** Um, good. Curious what you're calling about.

**Arya:** Yeah, no, I just saw that you signed up for an account with us. I just wanted to see what you're working on at the moment.

**Ashley:** Yeah, where did you say you were from?

**Arya:** Mother Duck, the cloud data warehouse.

**Ashley:** Oh, okay, yeah, that does sound kind of familiar. You said a trial?

**Arya:** Yeah, that's right. And did you get a chance to play around with the platform at all?

**Ashley:** You know, I haven't had a minute yet, briefly signed up, but yeah, I don't really have a chance to play around.

**Arya:** Oh, okay, that's right. Maybe I can help you get started. What's prompted you to download, to start using MotherDuck?

**Ashley:** You know, I think my boss wanted me to check it out. Like I haven't really had a chance to do anything now.

**Arya:** Totally, totally. And what did your boss want you to check out specifically? Like, what was the big use case?

**Ashley:** Yeah, no specific use case. We're on Snowflake today.

**Arya:** Okay, you're on Snowflake. And how's it been working out with Snowflake?

**Ashley:** You know, no real issues. Of course, it's going to be a bit more expensive than what else is out there, but we've always used it. I don't have any complaint.

**Arya:** Yeah, look, I mean, that's a pretty common thing that we hear from a lot of people. A lot of people are using Snowflake and they're having a great time, but it just, you know, the cost does rack up. So just to understand like the sort of cost picture, what are you roughly spending per month?

**Ashley:** Yeah, I could get those numbers for you. Off the top of my head, it's kind of above me. But I know we've had some recent surprise bills from, you know, queries running all night.

**Arya:** Okay. Okay, so it's more like the queries that are driving the cost?

**Ashley:** Yeah, yeah, and I guess in addition to that, there's the running of it slow as well. Now that we're having this conversation, I guess there are a few complaints I could come up with.

**Arya:** Totally, yeah. So let me ask you something a little bit differently. So is there anything that you're not doing on Snowflake? Like, are you stopping yourself from doing things because of cost?

**Ashley:** Like I said, this would probably be better conversation between my boss, me and you. And since we haven't really had a chance to set anything up, hard to say, you know, really any like feedback towards MotherDuck. I just, you know, hear it in a lot of conversations, in a lot of LinkedIn posts going around, so that's kind of how we...

**Arya:** Yeah. Yeah, no, I mean, that's completely fair. Hey, this is, I think I've got a good idea for you and your boss. What if we put you in front of a couple of experts here at Mother Duck and they can just sort of like get you started properly instead of you, you know, kicking the tires and trying to like figure it out and navigate it for the next two weeks, we can just get you started with a couple of experts. Are you free Wednesday at 2 pm, by any chance?

**Ashley:** Let me pull up my calendar. Like I said, really just kicking the tires, I'm not sure we'd actually make this switch, but I guess to make the trial worth it would probably be helpful to trial with somebody.

**Arya:** Yeah, no, we're definitely. Yeah, just want to speed up that time so that you can fully explore it, see if we're the right fit for you and yeah, get you started. So how about we lock in? Are you in front of your laptop right now?

**Ashley:** Yeah, let me see. When you said what? 2 p.m.?

**Arya:** Does that work for you?

**Ashley:** Yes, I'm on the West Coast. So that looks open.

**Arya:** Okay, great. Yeah, I'll set you with two of our best people, and yeah, I'll just send you the invite now and let me know if you've got it and I'll just lock you in there.

**Ashley:** Okay, great. What should I expect on this call?

**Arya:** Well, just basically run through what you're sort of looking to do on Mother Duck and they'll set you up with a trial properly and they'll go into more detail, more technical detail and explain any questions that you have as well.

**Ashley:** Okay, great. I'll plan to bring my boss then since, you know, he'll ultimately be the one calling the decision.

**Arya:** Sure. Okay. Sounds great. We'll see you then.

**Ashley:** All right, thanks. What'd you say your name was?

**Arya:** Arya from Mother Duck.

**Ashley:** Awesome. Great. Thanks. Great to meet you too. See you later. Bye.

**Arya:** Bye.

---

*Review created: February 2026*
