import { parse } from 'csv-parse/sync'

// Parse Luma CSV text into row objects keyed by the header row.
export function parseCsv(text) {
  return parse(text, {
    columns: true,
    bom: true,
    skip_empty_lines: true,
    relax_column_count: true
  })
}
