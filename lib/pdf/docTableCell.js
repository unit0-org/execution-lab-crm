import { wrapText } from './wrapText'

// Wrap a cell's text to its column width, returning its lines + style config.
export function fitCell(text, cfg) {
  return { lines: wrapText(text, cfg.font, cfg.size, cfg.width), cfg }
}

// Draw a fitted cell top-aligned from `top` downward; leaves the cursor put
// so both columns of a row can share the same vertical band.
export function drawCell(ctx, cell, top) {
  let y = top

  for (const line of cell.lines) {
    ctx.page.drawText(line, {
      x: cell.cfg.x, y: y - cell.cfg.size,
      size: cell.cfg.size, font: cell.cfg.font, color: cell.cfg.color
    })
    y -= cell.cfg.lh
  }
}
