# Battlecard: MotherDuck vs. BigQuery

## Quick Facts: BigQuery

| Attribute | Details |
|-----------|---------|
| **Founded** | 2010, by Google |
| **Positioning** | Serverless enterprise data warehouse |
| **Strengths** | Scale, serverless, GCP integration |
| **Weaknesses** | Cost unpredictability, no local dev, GCP lock-in |
| **Typical Customer** | GCP-heavy organizations |

**Notable**: MotherDuck was founded by the original designers of BigQuery!

---

## Head-to-Head Comparison

| Dimension | MotherDuck | BigQuery |
|-----------|------------|----------|
| **Architecture** | Serverless + hybrid | Serverless |
| **Pricing Model** | Compute Units / Per-Instance | Per TB scanned (or slots) |
| **Local Development** | Yes (DuckDB) | No |
| **Query Speed** | 4x faster (benchmarks) | Fast at scale |
| **Cost Predictability** | High | Variable |
| **Cloud Lock-in** | Multi-cloud | GCP only |
| **Free Tier** | 10 CU hours | 1 TB/month |

---

## Where We Win

### 1. Performance
- 4x faster in benchmarks
- DuckDB's columnar engine
- Optimized for interactive queries
- No cold start delays

**Proof Point**: "MotherDuck benchmarks 4x faster than BigQuery on typical analytics queries."

### 2. Local Development
- Develop locally with DuckDB
- Instant iteration cycles
- No cloud roundtrip for testing
- Same SQL everywhere

**Proof Point**: "Test queries locally in milliseconds, deploy to cloud unchanged."

### 3. Cost Predictability
- Know your costs upfront
- Compute Units or per-instance
- No surprise bills
- Hybrid execution reduces cloud costs

**Proof Point**: "No more 'why is our BigQuery bill $X this month?'"

### 4. Multi-Cloud Freedom
- Not locked to GCP
- Works with S3, GCS, Azure
- Your choice of ecosystem
- Portable skills

**Proof Point**: "Use MotherDuck regardless of cloud provider."

---

## Where BigQuery Wins (Be Honest)

| Area | BigQuery Advantage | Our Response |
|------|-------------------|--------------|
| **GCP integration** | Native to GCP ecosystem | "Works with GCS. No lock-in if you leave." |
| **Massive scale** | Petabyte-scale, slots model | "For PB, BigQuery works. Most don't need that." |
| **Free with GCP** | Bundled credits | "Free tier exists, but total cost often higher." |
| **ML integration** | BigQuery ML | "We're analytics-focused. Use dedicated ML tools." |

---

## Discovery Questions to Ask

When they mention BigQuery:

1. "How predictable are your BigQuery costs month-to-month?"
2. "How's the local development experience for your analysts?"
3. "Are you using BigQuery ML, or mostly SQL analytics?"
4. "How tied are you to GCP specifically?"
5. "Any frustrations with query costs or speed?"

**Trigger answers**:
- "Costs are unpredictable" → Cost predictability pitch
- "No local dev" → Developer experience pitch
- "Mostly SQL, no ML" → Analytics-focused pitch
- "We're multi-cloud" → Freedom pitch

---

## Handling BigQuery Objections

### "BigQuery is already included with GCP"
```
"GCP bundling is convenient, but it's not really 'free.' You pay per 
TB scanned, which can add up fast. MotherDuck's hybrid execution 
uses your local compute for free, often making total cost lower."
```

### "BigQuery is serverless too"
```
"Both are serverless, yes. The difference is MotherDuck adds local 
execution—you can develop and iterate locally with DuckDB, then 
deploy unchanged. BigQuery is cloud-only."
```

### "We're a GCP shop"
```
"MotherDuck works great with GCS and GCP. And if your company ever 
moves multi-cloud, you're not locked in. Many GCP shops use 
MotherDuck for the developer experience alone."
```

### "BigQuery ML is useful"
```
"For lightweight ML, that's fair. But most teams doing serious ML 
use dedicated tools. If your primary need is analytics, MotherDuck 
is faster and simpler."
```

---

## The Founding Story Angle

**Use when building credibility**:

```
"Fun fact—MotherDuck was founded by the original designers of 
BigQuery. They built MotherDuck because they saw an opportunity 
to make something even simpler and faster, especially for smaller 
datasets where BigQuery's architecture is overkill."
```

---

## Cost Comparison

### BigQuery Pricing
- **On-demand**: $5 per TB scanned
- **Flat-rate**: Slots (complex, expensive for small teams)
- **Problem**: Costs scale with data scanned, not value

### MotherDuck Pricing
- **Pulse**: Per-query (Compute Units)
- **Standard/Jumbo**: Per-hour (predictable)
- **Advantage**: Costs scale with compute used, not data size

**For a 100GB dataset**:
- BigQuery: $5 per full scan × queries/day = unpredictable
- MotherDuck: Fixed compute costs, hybrid execution reduces cloud usage

---

## Landmine Questions

Questions that expose BigQuery weaknesses:

1. "How do you test queries before running them on production data?"
2. "Have you ever been surprised by a BigQuery bill?"
3. "How long does it take to iterate on a complex query?"
4. "What happens if you need to move off GCP someday?"
5. "Do you use BigQuery's flat-rate pricing? How's that working?"

---

## Migration Talking Points

### Why Migration is Easy
- MotherDuck reads Parquet, same as BigQuery exports
- SQL is largely compatible
- Query your GCS data directly
- Can run in parallel during transition

### Migration Path
1. Connect MotherDuck to existing GCS bucket
2. Run parallel queries to validate
3. Gradually shift workloads
4. Maintain BigQuery for legacy if needed

---

## Quick Comparison Table (For Prospects)

| Need | Choose MotherDuck | Choose BigQuery |
|------|-------------------|-----------------|
| Predictable costs | ✅ | |
| Local development | ✅ | |
| Faster queries | ✅ | |
| Multi-cloud flexibility | ✅ | |
| Deep GCP integration | | ✅ |
| BigQuery ML users | | ✅ |
| Existing slot contracts | | ✅ |
| Petabyte scale | | ✅ |
