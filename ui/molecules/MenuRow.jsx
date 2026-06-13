import { rowStyle, textStyle, labelStyle, subtitleStyle }
  from './MenuRow.styles'

// A full-width clickable row for menus/palettes: a leading slot (icon or
// avatar), a label with an optional subtitle below it, and optional
// trailing meta. Hover is in globals.css.
export function MenuRow({ leading, label, subtitle, meta, onClick }) {
  return (
    <button type="button" data-menu-row onClick={onClick} style={rowStyle}>
      {leading}
      <span style={textStyle}>
        <span style={labelStyle}>{label}</span>
        <span style={subtitleStyle}>{subtitle}</span>
      </span>
      {meta}
    </button>
  )
}
