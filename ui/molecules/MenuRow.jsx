import { rowStyle, activeStyle, textStyle, labelStyle, subtitleStyle }
  from './MenuRow.styles'

/**
 * Full-width clickable menu/palette row: leading slot + label (with an
 * optional `subtitle` below) + optional trailing meta. `active`
 * pre-highlights it (keyboard-selected).
 */
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
