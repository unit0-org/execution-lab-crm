import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle, tipStyle } from './Sidebar.styles'

// Sidebar show/hide toggle — the standard panel icon (same both ways).
export function CollapseToggle({ onClick }) {
  return (
    <div data-collapse-toggle style={toggleStyle}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <Icon name="panelLeft" size={18} />
      </IconButton>
      <span data-collapse-tip style={tipStyle}>
        <span data-sidebar-when-expanded>Collapse</span>
        <span data-sidebar-when-collapsed>Expand</span>
      </span>
    </div>
  )
}
