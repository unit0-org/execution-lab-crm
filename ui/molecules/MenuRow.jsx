import { rowStyle, labelStyle } from './MenuRow.styles'

// A full-width clickable row for menus/palettes: a leading slot (icon or
// avatar), a label, and optional trailing meta. Hover is in globals.css.
export function MenuRow({ leading, label, meta, onClick }) {
  return (
    <button type="button" data-menu-row onClick={onClick} style={rowStyle}>
      {leading}
      <span style={labelStyle}>{label}</span>
      {meta}
    </button>
  )
}
