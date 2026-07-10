import { margin, contentWidth } from './pdfPage'
import { palette } from './brandPalette'

// Two-column geometry for the levers table: a fixed label column, a gutter,
// and the value column filling the rest of the content width.
export const gutter = 16
export const labelWidth = 190
export const valueX = margin + labelWidth + gutter
export const valueWidth = contentWidth - labelWidth - gutter
export const rowPad = { top: 8, bottom: 7 }

export const labelCfg = (fonts) => ({
  x: margin, width: labelWidth, size: 8.5, lh: 13,
  font: fonts.mono, color: palette.muted
})

export const valueCfg = (fonts) => ({
  x: valueX, width: valueWidth, size: 10.5, lh: 15,
  font: fonts.reg, color: palette.ink
})
