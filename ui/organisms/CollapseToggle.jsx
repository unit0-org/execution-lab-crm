import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle } from './Sidebar.styles'

export function CollapseToggle({ onClick }) {
  return (
    <div data-collapse-toggle style={toggleStyle}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <span data-sidebar-when-expanded>
          <Icon name="chevronLeft" size={18} />
        </span>
        <span data-sidebar-when-collapsed>
          <Icon name="chevronRight" size={18} />
        </span>
      </IconButton>
    </div>
  )
}
