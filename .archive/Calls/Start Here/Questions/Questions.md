**Why DuckDB -> MotherDuck?**
DuckDB proves you don't need a distributed system for analytical queries.
It shows a single machine is incredibly powerful.

**but...**
When you have datasets larger than your laptop
Want to share data across teams

Instead of getting a distributed data warehouse and spending data warehouse prices, you can take the DuckDB's single node approach adn make it cloudscale

so MotherDuck is **Serverless DuckDB**
Same performance characteristics and efficiency - but with cloud storage, sharing, collaboration and larger computer.

**Single Node vs Distributed?**

Distributed: Data gets split across many machines, query is broken into pieces and each machine processes its piece and then the results shuffle across the network and gets combined at the end.

Great because: infinite scale theoertically and each machine is small and cheap relatively.
Bad because: Network latency with shuffling, copmlexity, slower for smaller queries, charged per data scanned or wareshouse size, and over engineered.

Good for if you're doing hundred of TB or PB regularaly or need parallel processing of humungous datasets

Single Node: Each query runs on one powerful machine, data local to compute no shuffling, we can scale going UP so bigger machines or OUT so more nodes for more users.

Great because: faster than analytical queries, simpler, cost efficient only pay for compute time no data scanning fees, and spins up and down instantly.
Disadvantage: there is theoretically an upper limit for a single query data size so if it's 10TB+ it won't work as well.

**How do I stream Postgres data into MotherDuck?**

So there's two phases:

1. Take a snapshot/dump of your Postgres and load it into a local DuckDB on your machine and copy that local up to MotherDuck
   
   It's the fastest for bulk upload, local copy for testing and we can easily push DuckDB to the cloud.
   Otherwise you can use CDC tools like Estuary that can do it directly.
   
1. Ongoing Sync:
   CDC streaming with Estuary, connects your PG DB, captures all changes real time and streams it continuously to MD.
   
   We work closesly with their team, cost effective and does both backfill and ongoing streaming, simple and free ier for trials.