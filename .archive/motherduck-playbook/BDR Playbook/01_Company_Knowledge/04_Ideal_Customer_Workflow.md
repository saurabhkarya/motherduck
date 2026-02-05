# Ideal Customer Workflow: A Day in the Life

What does a "perfect" usage pattern look like? This guide helps you visualize the daily workflow of a MotherDuck power user.

## The Persona: "Alex", The Data Engineer
Alex works at a mid-sized fintech. She has a 50GB CSV file of transaction logs on her laptop and needs to join it with the 2TB "Users" table in the cloud to find fraud.

### 09:00 AM - Local Exploration (Coffee Phase)
Alex opens her terminal. She doesn't log into a slow web console.
```bash
$ duckdb
```
She queries the local CSV file instantly to see the schema.
```sql
SELECT * FROM 'transactions_2024.csv' LIMIT 5;
```
*   **Cost**: $0.
*   **Latency**: 0.01 seconds.
*   **Feeling**: Fast. Pythonic.

### 09:15 AM - connecting to the Cloud (The "Ah-ha" Moment)
She realizes she needs the User ID mapping from the production database.
```sql
.open md:
```
She is now connected to MotherDuck.

### 09:30 AM - Development (Dual Execution)
She writes the analytical query.
```sql
CREATE OR REPLACE TABLE fraud_report AS
SELECT
    local_csv.txn_id,
    prod.user_email
FROM 'transactions_2024.csv' AS local_csv
JOIN my_db.users AS prod
ON local_csv.user_id = prod.id
WHERE local_csv.amount > 10000;
```
*   **What happens**: MotherDuck automagically uploads *only* the filtered parts of her CSV to the cloud, executes the heavy join there (using a "Mega" Duckling), and saves the result.
*   **Feeling**: "I just joined my laptop data with the cloud without building an ETL pipeline."

### 10:00 AM - Collaboration (The "Share")
Alex needs to show this to the Head of Risk.
```sql
CREATE SHARE fraud_share FROM fraud_report;
```
She sends the link `motherduck.com/s/....` to her boss.

### 10:05 AM - Consumption
The boss opens the link in the browser. The query runs instantly on their own isolated Duckling.
*   **Result**: No emails. No "Can you refresh this?". Just data.
