import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle, tipStyle } from './Sidebar.styles'

// Sidebar show/hide toggle — the panel icon when open, an arrow when
// collapsed (pointing the way it would expand).
export function CollapseToggle({ onClick }) {
  return (
    <div data-collapse-toggle style={toggleStyle}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <span data-sidebar-when-expanded>
          <Icon name="panelLeft" size={18} />
        </span>
        <span data-sidebar-when-collapsed>
          <Icon name="chevronRight" size={18} />
        </span>
      </IconButton>
      <span data-collapse-tip style={tipStyle}>
        <span data-sidebar-when-expanded>Collapse</span>
        <span data-sidebar-when-collapsed>Expand</span>
      </span>
    </div>
  )
}
