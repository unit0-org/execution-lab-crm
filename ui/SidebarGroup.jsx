import { groupStyle, groupLabelStyle } from './SidebarGroup.styles'

// Labelled section inside the sidebar (e.g. "Connected accounts").
export function SidebarGroup({ label, children }) {
  return (
    <div style={groupStyle}>
      {label && <div style={groupLabelStyle}>{label}</div>}
      {children}
    </div>
  )
}
