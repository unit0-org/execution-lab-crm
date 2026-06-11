import {
  rowStyle, numStyle, labelStyle, ruleStyle
} from './SectionLabel.styles'

// A numbered section divider: "01" + label + a rule line.
export function SectionLabel({ n, children }) {
  return (
    <div style={rowStyle}>
      <span style={numStyle}>{n}</span>
      <span style={labelStyle}>{children}</span>
      <span style={ruleStyle} />
    </div>
  )
}
