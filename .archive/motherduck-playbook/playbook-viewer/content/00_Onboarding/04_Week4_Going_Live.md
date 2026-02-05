# Week 4: Going Live

**Goal**: Use the product yourself, handle technical questions confidently, and demonstrate readiness.

---

## Days 1-2: Hands-On with MotherDuck

**Goal**: Use the product yourself to build authentic credibility. Understand the user experience and learn enough SQL to be dangerous.

### Why This Matters

> You can't sell what you don't know. The best way to build authentic credibility is to use the product yourself.

By using MotherDuck, you'll:
- Speak the language of users
- Develop insight and intuition
- Make every interaction more credible and relevant

### Activities

1. **Sign up for a new MotherDuck account**
2. **Start W3Schools SQL tutorial**
   - Basic SELECT
   - WHERE clauses
   - JOIN operations
   - GROUP BY
   - Tip: Test your knowledge through embedded exercises
3. **Run queries on sample datasets in MotherDuck**
4. **Test Omni** (our closest BI partner)

### Hands-On Exercises

1. Access a sample dataset on MotherDuck
2. Run a few analytical queries
3. Create a simple visualization with Omni
4. Share your results with the team

**Getting Access:**
- Create a new MotherDuck account
- Contact Garrett O'Brien for Omni sandbox invitation

### Videos to Follow

- Intro to MotherDuck UI
- Running your first queries
- Building a simple chart with Omni

### Share Your Experience

After completing the hands-on work, reflect on:
- What was intuitive?
- What was surprisingly fast?
- How does it compare to other warehouses you've heard about?

---

## Days 3-4: Pricing & Technical Deep Dives

**Goal**: Confidently discuss pricing and handle technical questions.

### Core Learning

| Topic | Focus |
|-------|-------|
| Pricing Model | Understand how MotherDuck pricing works |
| Value vs. Cost | How to position the value proposition |
| Technical Questions | Common questions and how to answer them |

### Resources

**Study:**
- Pricing Page
- "How to Cut Cloud Data Warehouse Costs by 70% with DuckDB and MotherDuck"
- ATM.com Case Study
- Pricing Talk Track
- Competitive Battle Cards (from Week 2)

### Common Technical Questions

Prepare answers for these frequently asked questions:

| Question | Key Points to Cover |
|----------|---------------------|
| "Can MotherDuck handle [X] TB of data?" | Scale-up architecture, typical workload sizes |
| "How does security work?" | SOC 2, encryption, access controls |
| "What about data residency/compliance?" | Regions, GDPR, HIPAA BAA |
| "Can we migrate from [competitor]?" | Migration support, compatibility |
| "What happens if we outgrow MotherDuck?" | Growth path, when MD is/isn't right fit |

### Exercise: Competitive Comparison One-Pager

Create a comparison of MotherDuck vs. Snowflake for:

**Scenario 1: 100 GB dataset, moderate queries**
| Factor | MotherDuck | Snowflake |
|--------|------------|-----------|
| Cost | | |
| Performance | | |
| Complexity | | |

**Scenario 2: 5 TB dataset, heavy usage**
| Factor | MotherDuck | Snowflake |
|--------|------------|-----------|
| Cost | | |
| Performance | | |
| Complexity | | |

**Scenario 3: Team of 10 analysts vs. Team of 100**
| Factor | MotherDuck | Snowflake |
|--------|------------|-----------|
| Cost | | |
| Performance | | |
| Complexity | | |

---

## Day 5: Certification & Go-Live

**Goal**: Demonstrate readiness and get feedback.

### Final Assessment Components

Complete all of the following and review results with Scott:

#### 1. Written Comprehensive
- Complete the written exam

#### 2. Live Demo (5 minutes)
- Show your manager a MotherDuck demo
- Demonstrate key features
- Handle questions

#### 3. Role Play (3 scenarios)

**Scenario 1: Cold Outreach Call**
- Prospect doesn't know MotherDuck
- Get them interested and book a meeting

**Scenario 2: Discovery Call with Inbound Lead**
- Warm lead who signed up
- Qualify and understand their needs

**Scenario 3: Objection Handling**
- "We're happy with Competitor XYZ"
- Overcome the objection professionally

#### 4. Persona Exercise
- Present one persona's journey
- Explain how you'd engage them at each stage

#### 5. Deck Certification
- Mock Discovery + Deck presentation
- Full flow from intro to close

### Feedback Session

After completing all assessments, review with Scott:
- What went well?
- What are weak points / areas for improvement?
- Where should you focus going forward?

---

## Week 4 Checklist

### Days 1-2
- [ ] Create MotherDuck account
- [ ] Complete W3Schools SQL basics
- [ ] Run queries on sample datasets
- [ ] Get Omni access and test it
- [ ] Create simple visualization
- [ ] Share experience with team

### Days 3-4
- [ ] Study pricing page thoroughly
- [ ] Complete ATM case study
- [ ] Practice pricing talk track
- [ ] Prepare answers for common technical questions
- [ ] Complete competitive comparison one-pager

### Day 5
- [ ] Complete written comprehensive exam
- [ ] Deliver 5-minute live demo
- [ ] Complete all 3 role play scenarios
- [ ] Present persona exercise
- [ ] Complete deck certification
- [ ] Feedback session with Scott

---

## SQL Cheat Sheet

### Basic Queries
```sql
-- Select all columns
SELECT * FROM table_name;

-- Select specific columns
SELECT column1, column2 FROM table_name;

-- Filter with WHERE
SELECT * FROM table_name WHERE column1 = 'value';

-- Sort results
SELECT * FROM table_name ORDER BY column1 DESC;

-- Limit results
SELECT * FROM table_name LIMIT 10;
```

### Aggregations
```sql
-- Count rows
SELECT COUNT(*) FROM table_name;

-- Group and count
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;

-- Sum values
SELECT SUM(column1) FROM table_name;

-- Average
SELECT AVG(column1) FROM table_name;
```

### Joins
```sql
-- Inner join
SELECT a.*, b.column1
FROM table_a a
JOIN table_b b ON a.id = b.a_id;

-- Left join
SELECT a.*, b.column1
FROM table_a a
LEFT JOIN table_b b ON a.id = b.a_id;
```

---

## You're Almost There!

By the end of Week 4, you should feel confident to:
- Explain MotherDuck's value proposition
- Demo the product
- Handle common objections
- Run discovery calls
- Hand off qualified leads to AEs

**Week 5 focuses on building your prospecting muscle and establishing your weekly rhythm.**
