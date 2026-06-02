import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle } from './Sidebar.styles'

export function CollapseToggle({ collapsed, onClick }) {
  const icon = collapsed ? 'chevronRight' : 'chevronLeft'

  return (
    <div data-collapse-toggle style={toggleStyle(collapsed)}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <Icon name={icon} size={18} />
      </IconButton>
    </div>
  )
}
