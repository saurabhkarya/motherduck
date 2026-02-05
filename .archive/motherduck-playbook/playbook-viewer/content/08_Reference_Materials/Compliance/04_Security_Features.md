# MotherDuck Security Features Overview

A comprehensive guide to MotherDuck's security architecture for sales conversations with security-conscious prospects.

---

## Security Philosophy

MotherDuck follows a **defense-in-depth** approach—multiple layers of security controls that work together to protect customer data.

> "MotherDuck is committed to protecting customer data, honoring global privacy rights, and securing data through best practices for highly available, scalable, and secure cloud applications."

---

## Security Architecture

### Defense-in-Depth Layers

```
┌─────────────────────────────────────────────────┐
│                 APPLICATION                      │
│    Token Authentication, SaaS Mode, RBAC        │
├─────────────────────────────────────────────────┤
│                  NETWORK                         │
│         TLS Everywhere, API Security            │
├─────────────────────────────────────────────────┤
│                  COMPUTE                         │
│        Isolated Ducklings, Per-User Tenancy     │
├─────────────────────────────────────────────────┤
│                  STORAGE                         │
│     Encrypted at Rest, Secrets Vault, Backups   │
├─────────────────────────────────────────────────┤
│                COMPLIANCE                        │
│      SOC 2 Type II, GDPR, HIPAA BAA Available   │
└─────────────────────────────────────────────────┘
```

---

## Authentication & Access Control

### Authentication Methods

| Method | Use Case | Details |
|--------|----------|---------|
| **Google OAuth** | Web UI, SSO | Social login via Google |
| **GitHub OAuth** | Developer login | Social login via GitHub |
| **Username/Password** | Traditional login | Email-based authentication |
| **Access Tokens** | Programmatic access | API tokens for CLI, Python, etc. |

### Access Tokens

- **Read/Write Tokens**: Full access (default)
- **Read Scaling Tokens**: Read-only for BI/analytics
- **Expiration**: Optional token expiry
- **Revocation**: Tokens can be revoked anytime

### Token Usage
```
# In connection string
md:my_database?motherduck_token=<token>

# Or via environment variable
export motherduck_token=<token>
```

---

## Data Protection

### Encryption

| Layer | Protection |
|-------|------------|
| **In Transit** | TLS 1.2+ for all connections |
| **At Rest** | AES-256 encryption |
| **Secrets** | Encrypted secrets vault |

### Secrets Management

MotherDuck provides a secure secrets vault for:
- S3 credentials
- Azure Blob credentials
- GCS credentials
- Other external data source credentials

**No more hardcoded keys in queries or connection strings.**

### Data Isolation

**Per-User Tenancy (Ducklings)**:
- Every user gets isolated compute instances
- One user's queries never impact another's
- No noisy neighbor problems
- Resource isolation by design

---

## Compute Security

### Isolated Ducklings

| Feature | Security Benefit |
|---------|------------------|
| **Per-user isolation** | Queries can't access other users' data |
| **Separate compute** | No resource contention |
| **Session isolation** | Clean state per session |

### SaaS Mode

For third-party tools and BI vendors:
- Limits MotherDuck's interaction with local environment
- Additional security controls for hosted deployments
- Protects vendor infrastructure

---

## Network Security

### TLS Everywhere

- All connections encrypted with TLS 1.2+
- CLI to API: Encrypted
- Web UI to backend: Encrypted
- API to storage: Encrypted

### API Security

- Token-based authentication
- Rate limiting
- Request validation
- Audit logging

---

## Data Durability & Availability

### Managed Storage

| Feature | Benefit |
|---------|---------|
| **Durable storage** | Data persisted reliably |
| **Separated from compute** | Improved resilience |
| **SOC 2 Availability** | Validated uptime controls |

### Failsafe Protection

When data is deleted:
1. Enters "Failsafe" stage
2. Retained for **7 days** as system backup
3. Protection against accidental deletion
4. Available for recovery if needed

---

## Organization Management

### Organization Features

| Feature | Details |
|---------|---------|
| **Email domain auto-join** | Users with matching email domains join automatically |
| **Database-level access** | Users access entire database or none |
| **Simplified RBAC** | Reduces misconfiguration risk |

### Access Control Model

MotherDuck uses a **simpler database-level access control model**:
- User has access to entire database, or none
- Reduces complexity vs. row/column level
- Fewer opportunities for misconfiguration
- Clear, auditable permissions

---

## Compliance Summary

| Certification | Status | Availability |
|---------------|--------|--------------|
| **SOC 2 Type II** | ✅ Completed | Business Plan |
| **GDPR** | ✅ Verified | All Plans |
| **HIPAA BAA** | ✅ Available | Business Plan |
| **DPA** | ✅ Available | Upon request |

### Compliance Documentation

Available to Business Plan customers:
- SOC 2 Type II report
- Data Processing Agreement
- HIPAA Business Associate Agreement
- Security questionnaire responses

**Contact**: security@motherduck.com

---

## Security Comparison

### vs. Self-Managed Databases

| Aspect | Self-Managed | MotherDuck |
|--------|--------------|------------|
| Patching | You handle it | Automatic |
| Encryption setup | Manual | Built-in |
| Access control | Configure yourself | Managed |
| Compliance | Your responsibility | Shared model |
| Backups | You configure | Automatic failsafe |

### vs. Other Cloud Warehouses

| Aspect | MotherDuck | Typical Enterprise |
|--------|------------|-------------------|
| Per-user isolation | ✅ Yes | Often shared |
| Secrets management | ✅ Built-in | Often separate tool |
| Setup complexity | Low | High |
| Compliance burden | Low | High |

---

## Common Security Questions

### "How is our data protected?"

> "Your data is encrypted at rest with AES-256 and in transit with TLS 1.2+. Each user gets isolated compute (Ducklings), so there's no cross-contamination between users. Plus, we're SOC 2 Type II certified, which validates our security controls."

### "What happens if data is accidentally deleted?"

> "We have a 7-day Failsafe period. When data is deleted, it's retained as a system backup for 7 days before permanent deletion. This protects against accidental data loss."

### "How do you handle credentials for external data sources?"

> "We have a built-in secrets vault. You store your S3, Azure, or GCS credentials securely with us—no more hardcoding credentials in queries. The secrets are encrypted and managed centrally."

### "Is there multi-tenancy risk?"

> "No—every user gets their own isolated compute instance (Duckling). Your queries run in isolation, so there's no risk of another user's workload affecting yours or accessing your data."

### "Can we get your security documentation?"

> "Absolutely. For Business Plan customers, we can provide our SOC 2 Type II report, respond to security questionnaires, and provide our DPA. Just reach out to security@motherduck.com."

---

## Security Checklist for Prospects

When discussing security, confirm:

- [ ] Data encryption requirements (at rest, in transit)
- [ ] Authentication needs (SSO, tokens)
- [ ] Compliance requirements (SOC 2, GDPR, HIPAA)
- [ ] Data residency requirements (EU region available)
- [ ] Security review process (questionnaire, report)
- [ ] DPA/BAA requirements

---

## Related Documents

- [SOC 2 Type II Explained](./01_SOC2_Type_II_Explained.md)
- [GDPR Compliance Explained](./02_GDPR_Explained.md)
- [HIPAA Compliance Explained](./03_HIPAA_Explained.md)
- [Product Overview](../01_Company_Knowledge/01_Product_Overview.md)
- [Pricing Plans](../01_Company_Knowledge/03_Pricing_Plans.md)
