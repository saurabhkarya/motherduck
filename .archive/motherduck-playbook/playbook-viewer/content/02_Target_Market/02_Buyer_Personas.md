# Buyer Personas

Understanding your buyer personas helps you tailor your messaging and approach. Here are the key personas you'll encounter.

---

## Primary Personas

### 1. The Data Engineer
**Title variations**: Data Engineer, Analytics Engineer, Data Platform Engineer

| Attribute | Details |
|-----------|---------|
| **Role** | Builds and maintains data pipelines |
| **Reports to** | VP Engineering, CTO, Head of Data |
| **Budget authority** | Influencer, sometimes decision maker |
| **Tech savvy** | Very high |

**Day-to-Day Challenges**:
- Managing complex ETL pipelines
- Debugging slow queries
- Provisioning and tuning warehouses
- Context switching between local dev and production
- Fighting infrastructure fires

**What They Care About**:
- Developer experience and tooling
- Performance and query speed
- Not managing infrastructure
- Modern, elegant solutions
- Community and ecosystem

**MotherDuck Value Props**:
- "Same SQL locally and in cloud"
- "Zero infrastructure to manage"
- "Built on DuckDB—you probably already love it"
- "10x faster iteration with local execution"

**Discovery Questions**:
- "What does your current data pipeline look like?"
- "How much time do you spend on infrastructure vs. building?"
- "Have you tried DuckDB for any projects?"
- "What's your biggest frustration with your current warehouse?"

**Objections to Expect**:
- "We already have Snowflake"
- "Is it production-ready?"
- "How does it handle X scale?"

---

### 2. The Data Analyst / Analytics Lead
**Title variations**: Data Analyst, Business Analyst, Analytics Manager, Head of Analytics

| Attribute | Details |
|-----------|---------|
| **Role** | Derives insights from data |
| **Reports to** | VP Analytics, CFO, COO |
| **Budget authority** | Influencer |
| **Tech savvy** | Medium-high (SQL fluent) |

**Day-to-Day Challenges**:
- Waiting for queries to finish
- Requesting access to data
- Dealing with slow/unreliable dashboards
- Manual data wrangling in spreadsheets
- Communicating findings to stakeholders

**What They Care About**:
- Speed of analysis
- Self-service access to data
- Easy collaboration and sharing
- Reliable, up-to-date data
- Tools that don't require engineering help

**MotherDuck Value Props**:
- "Instant query results—no waiting"
- "Web UI with AI-assisted SQL"
- "Easy sharing with zero-copy snapshots"
- "Natural language to SQL with PROMPT QUERY"

**Discovery Questions**:
- "How long do you typically wait for query results?"
- "How do you share analyses with colleagues?"
- "What tools do you use for ad-hoc analysis?"
- "How often do you need to request data access?"

**Objections to Expect**:
- "Our analysts aren't very technical"
- "We're locked into our BI tool"
- "I don't make the infrastructure decisions"

---

### 3. The Technical Founder / CTO
**Title variations**: CTO, VP Engineering, Co-founder, Head of Engineering

| Attribute | Details |
|-----------|---------|
| **Role** | Technical strategy and leadership |
| **Reports to** | CEO, Board |
| **Budget authority** | Decision maker |
| **Tech savvy** | Very high |

**Day-to-Day Challenges**:
- Making build vs. buy decisions
- Managing limited engineering resources
- Controlling cloud costs
- Moving fast without accumulating tech debt
- Choosing the right tools for scale

**What They Care About**:
- Total cost of ownership
- Simplicity and maintainability
- Engineering team productivity
- Scalability and future-proofing
- Vendor reliability

**MotherDuck Value Props**:
- "70% cost savings vs. Snowflake"
- "Zero ops burden—serverless"
- "Your engineers build features, not manage infra"
- "Scales from startup to growth stage"

**Discovery Questions**:
- "What does your data infrastructure look like today?"
- "How much engineering time goes to data infrastructure?"
- "What's your biggest concern about your current approach?"
- "How do you think about build vs. buy for data tools?"

**Objections to Expect**:
- "We've already invested in X"
- "Is MotherDuck proven at scale?"
- "What's the lock-in risk?"

---

## Secondary Personas

### 4. The VP of Data / Head of Data
| Attribute | Details |
|-----------|---------|
| **Role** | Data strategy and team leadership |
| **Budget authority** | Decision maker |
| **Tech savvy** | High |

**What They Care About**:
- Team productivity
- Platform reliability
- Cost optimization
- Data governance
- Hiring and retention

**Key Message**: "Empower your team to move faster with a platform that scales with you—without the ops burden."

---

### 5. The Finance Leader (CFO / VP Finance)
| Attribute | Details |
|-----------|---------|
| **Role** | Financial oversight |
| **Budget authority** | Approver |
| **Tech savvy** | Low-medium |

**What They Care About**:
- Cost predictability
- ROI on tools
- Usage visibility
- Budget control

**Key Message**: "Predictable, pay-per-query pricing. Customers save 70% vs. traditional warehouses."

---

## Persona Mapping to Buying Process

| Stage | Primary Contact | Secondary |
|-------|-----------------|-----------|
| **Discovery** | Data Engineer, Analyst | - |
| **Evaluation** | Data Engineer | CTO, VP Data |
| **Decision** | CTO, VP Data | CFO, Finance |
| **Implementation** | Data Engineer | Analyst |

---

## Communication Preferences

| Persona | Email | LinkedIn | Call | Demo |
|---------|-------|----------|------|------|
| Data Engineer | Good | Great | OK | Love |
| Data Analyst | Good | OK | OK | Love |
| CTO/Founder | Brief | Good | Good | OK |
| VP Data | Good | Good | Good | Good |
| CFO | Brief | OK | Good | Skip |
