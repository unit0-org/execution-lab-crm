import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle } from './Sidebar.styles'

// Sidebar show/hide toggle — the standard panel icon (same both ways).
export function CollapseToggle({ onClick }) {
  return (
    <div data-collapse-toggle style={toggleStyle}>
      <IconButton label="Toggle sidebar" onClick={onClick}>
        <Icon name="panelLeft" size={18} />
      </IconButton>
    </div>
  )
}
