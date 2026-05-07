import { sectionStyle, labelStyle } from './SidebarSection.styles'

export function SidebarSection({ label, children }) {
  return (
    <div style={sectionStyle}>
      {label && <div style={labelStyle}>{label}</div>}
      {children}
    </div>
  )
}
