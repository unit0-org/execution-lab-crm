import { palette } from './brandPalette'
import { fitCell, drawCell } from './docTableCell'
import { labelCfg, valueCfg } from './docTableCols'
import { hairline } from './hairline'
import { ensureSpace } from './flowSpace'

const headCfg = (cfg) => ({ ...cfg, size: 8, color: palette.subtle })

// The column labels above the table body, over a rule.
export function drawTableHead(ctx) {
  ensureSpace(ctx, 26)
  const top = ctx.y - 2

  drawCell(ctx, fitCell('LEVER', headCfg(labelCfg(ctx.fonts))), top)
  drawCell(ctx, fitCell('SETTING', headCfg(valueCfg(ctx.fonts))), top)
  ctx.y -= 14
  hairline(ctx, 8)
}
