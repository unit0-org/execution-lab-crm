// Version of the enrichment ops' input/return shapes. Surfaced on every
// enrichment tool result so the enricher's --refresh-ops can detect field
// changes, not just newly-added tool names. Bump on any shape change.
export const OPS_SCHEMA_VERSION = 1
