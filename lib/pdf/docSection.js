import { drawSectionHeading } from './docHeading'
import { drawDocRow } from './docRow'
import { drawDocBlock } from './docBlock'
import { drawDocTable } from './docTable'

// A titled section: its heading, then a table, label/value rows, and/or
// free-text blocks. An empty section still shows a muted placeholder.
export function drawDocSection(ctx, section) {
  drawSectionHeading(ctx, section.heading)

  const rows = section.rows || []
  const blocks = section.blocks || []

  if (section.table) drawDocTable(ctx, section.table)

  for (const row of rows) drawDocRow(ctx, row)

  for (const block of blocks) drawDocBlock(ctx, block)

  if (!rows.length && !blocks.length && !section.table)
    drawDocRow(ctx, { value: 'None yet.' })
}
