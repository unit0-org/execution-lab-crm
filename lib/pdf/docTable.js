import { drawTableHead } from './docTableHead'
import { drawTableRow } from './docTableRow'

// A two-column table (label | value): a light header, then one wrapped row
// per entry. Used for the offer levers so they pack the width tightly.
export function drawDocTable(ctx, table) {
  drawTableHead(ctx)

  for (const row of table.rows) drawTableRow(ctx, row)
}
