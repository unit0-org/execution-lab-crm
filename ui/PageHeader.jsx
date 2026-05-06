import { pageHeaderStyle } from './PageHeader.styles'

// Top-of-page header with a title slot and actions slot.
export function PageHeader({ title, actions }) {
  return (
    <header style={pageHeaderStyle}>
      {title}
      {actions}
    </header>
  )
}
