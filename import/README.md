# AvtoMarket Aggregator Import

AvtoMarket supports external listings from authorised feeds (XML/CSV/API) and dealer feeds.

Each imported listing must retain:
- source_name
- source_url
- external_id
- listing_kind = external

Do not copy third-party photos/descriptions unless the source licence/agreement permits it. The canonical external URL is retained so AvtoMarket can send the visitor to the original listing.

## Production sync

Supabase Edge Function: `sync-external-listings`.

Required server-only secrets:
- `AVTOPODATKI_API_KEY`
- `AVTOPODATKI_FEED_URL`

The importer upserts on `source_name + external_id`, records `last_seen_at`, and never exposes the provider API key to the web/mobile client. Provider-specific field mapping can be finalized once the official API response/schema is supplied.
