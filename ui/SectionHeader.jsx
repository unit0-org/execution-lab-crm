import { sectionHeaderStyle } from './SectionHeader.styles'

export function SectionHeader({ children }) {
  return <div style={sectionHeaderStyle}>{children}</div>
}
