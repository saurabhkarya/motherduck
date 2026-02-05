# Shares & Collaboration

One of the biggest friction points in data engineering is "How do I give this data to my colleague?"
- Mailing CSVs? (Outdated, insecure)
- Granting IAM roles on S3 buckets? (Complex, risky)
- Creating a new database user and managing GRANTs? (Tedious)

MotherDuck introduces **Shares** to solve this.

## The "Share" Concept

A Share in MotherDuck is a snapshot or a live view of a database that can be shared via a simple mechanism.

### Key Features
1.  **Zero-Copy**: Creating a share doesn't duplicate the data storage. It points to the same underlying S3 objects.
2.  **Instant**: Because no data is copied, sharing fully populated databases takes milliseconds.
3.  **SQL Interface**: You can create shares using standard SQL commands.

## How to Share

### 1. Create a Share
```sql
CREATE SHARE my_share FROM my_database;
```

### 2. Grant Access
You can share with specific emails or make it public (if configured).
```sql
GRANT SELECT ON SHARE my_share TO 'colleague@company.com';
```

### 3. Consume a Share
The recipient simply attaches it:
```sql
ATTACH 'md:my_share';
```
Now they can query it as if it were their own local database.

## Use Cases
- **Data Products**: A data engineering team creates a "Gold" dataset share for analysts.
- **Snapshots**: create a share of the database "as of" a certain time for debugging or audit.
- **Public Data**: Hosting public datasets (like weather or census data) for anyone to query without paying for the egress yourself (MotherDuck manages this).
