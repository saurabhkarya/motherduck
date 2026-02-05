# 1.5-Tier Architecture (WASM-Powered)

MotherDuck diverges from the traditional 2-tier (Client <-> Server) or 3-tier architectures. It implements what is often called a **1.5-Tier Architecture**.

## The Concept

In a traditional database setup:
- **Tier 1 (Client)**: A "dumb" client (CLI, BI tool) sends SQL strings over the network.
- **Tier 2 (Server)**: The heavy lifting (parsing, planning, execution) happens entirely on the server.

In MotherDuck's 1.5-Tier architecture:
- **The Client is Smart**: The client (your laptop, or the browser via WASM) runs a full DuckDB engine.
- **The Server is Smart**: The cloud runs the DuckDB engine.
- **They Collaborate**: They speak a rich protocol, not just SQL strings.

## How it works

1.  **Local Intelligence**: When you run a query, your local DuckDB instance parses and analyzes it *first*.
2.  **WebAssembly (WASM)**: In the browser (MotherDuck Web UI), DuckDB runs directly in the client side using WASM. This means simple operations or local file reads can be instant, without round-tripping to a server.
3.  **Optimized Routing**: The system decides what runs where (see [Dual Execution](../02_Core_Concepts/01_Dual_Execution.md)).

## Benefits

- ** responsiveness**: Immediate feedback on syntax errors or local catalog queries.
- **Reduced Latency**: No network overhead for local-only operations.
- **Edge Computing**: Utilizing the user's hardware reduces cloud costs and improves perceived performance.
