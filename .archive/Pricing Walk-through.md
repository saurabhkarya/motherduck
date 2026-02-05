Pricing has three components:

1. Platform fee: For a small team you're looking at $25/month base on our Lite Plan.
	1. If you need more features like read scaling for customer-facing dashboards, that's $100/month on Business Plan
2. Storage: Since you're [data size], that's about $64/month in storage costs at $0.08 per GB
3. Compute: FOr interactive workloads I would say to use our Standard instances $1.44 per hour of uptime (uptime not per query)

So here's a rough estimate for your use case:

- **Platform:** $25/month (Lite Plan)
- **Storage:** ~$64/month (800GB)
- **Compute:** Let's say 10-15 analysts running queries throughout the day. Conservatively, if each analyst uses 2-3 hours of actual compute time per day, that's about 50-60 hours/month total. At $1.44/hour, that's roughly $72-86/month.

**Total estimated cost: ~$160-175/month**

That's a **95% reduction** from your current $3-5K. And that's being conservative.

