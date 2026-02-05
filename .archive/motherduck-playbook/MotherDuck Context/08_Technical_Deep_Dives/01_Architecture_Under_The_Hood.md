# Architecture Under the Hood

MotherDuck's architecture is a radical departure from the last decade of cloud data warehouses.

## The 1.5 Tier Architecture

Traditional web apps are 3-tier:
1.  **Frontend** (Browser/App)
2.  **Backend** (API Server)
3.  **Database** (Postgres/Snowflake)

In 3-tier, the client is "dumb". It just displays JSON. The database is far away.

**MotherDuck is 1.5 Tier**:
1.  **Smart Client**: The client (your laptop CLI or the Browser) runs a full database engine (DuckDB).
2.  **Smart Server**: The server (MotherDuck Cloud) runs the same database engine.
3.  **No "API" Middleman**: They talk database-protocol directly.

### The "Dumb" Client Problem
In Snowflake, if you type `SELECT 1`, the query goes over the internet, spins up a warehouse, computes `1`, and sends it back. Latency: 500ms to 5 seconds.
In MotherDuck, `SELECT 1` is computed locally by the Smart Client. Latency: 0.1ms. It feels instant.

## WASM (WebAssembly): The Browser Database

How does MotherDuck run a database *inside* Chrome? **WebAssembly (WASM)**.
- WASM allows C++ code (DuckDB) to run in the browser at near-native speeds.
- When you open the MotherDuck UI, you are actually downloading a mini-database engine.
- This allows you to open a local `.csv` file in the browser and query it without uploading it to the server first!

## Verified Engine (Vectorized)

(See [OLAP vs OLTP](../03_Comparisons/02_OLAP_vs_OLTP_Embedded.md) for the high level).

Technically, the **Vectorized Engine** works by leveraging **SIMD** (Single Instruction, Multiple Data).
- CPUs are good at doing the same math operation on a list of numbers.
- DuckDB organizes data into "Chunks" (Vectors) of 2048 values.
- It fits these chunks into the L1/L2 CPU Cache.
- Result: It processes data as fast as your RAM can feed it, often billions of rows per second on a single core.
