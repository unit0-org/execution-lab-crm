import { rowStyle, activeStyle, textStyle, labelStyle, subtitleStyle }
  from './MenuRow.styles'

// A full-width clickable row for menus/palettes: a leading slot (icon or
// avatar), a label with an optional subtitle below it, and optional
// trailing meta. Hover is in globals.css; `active` pre-highlights it.
export function MenuRow({ leading, label, subtitle, meta, active, onClick }) {
  const style = active ? { ...rowStyle, ...activeStyle } : rowStyle

  return (
    <button type="button" data-menu-row onClick={onClick} style={style}>
      {leading}
      <span style={textStyle}>
        <span style={labelStyle}>{label}</span>
        <span style={subtitleStyle}>{subtitle}</span>
      </span>
      {meta}
    </button>
  )
}
