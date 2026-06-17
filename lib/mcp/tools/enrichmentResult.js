import { toolResult } from '../toolResult'
import { OPS_SCHEMA_VERSION } from '@/lib/enrichment/controllers'

// Wrap an enrichment op result, stamping the connector-wide schema version
// so the enricher's --refresh-ops can detect field changes.
export function enrichmentResult(data) {
  return toolResult({ ...data, schemaVersion: OPS_SCHEMA_VERSION })
}
