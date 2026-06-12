import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle, tipStyle } from './Sidebar.styles'

export function CollapseToggle({ onClick }) {
  return (
    <div data-collapse-toggle style={toggleStyle}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <span data-sidebar-when-expanded>
          <Icon name="chevronLeft" size={16} />
        </span>
        <span data-sidebar-when-collapsed>
          <Icon name="chevronRight" size={16} />
        </span>
      </IconButton>
      <span data-collapse-tip style={tipStyle}>
        <span data-sidebar-when-expanded>Collapse</span>
        <span data-sidebar-when-collapsed>Expand</span>
      </span>
    </div>
  )
}
