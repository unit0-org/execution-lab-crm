import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { toggleStyle } from './Sidebar.styles'

// Switch light (default) / dark; the icon shows the mode you'd switch to.
export function ThemeToggle({ onClick }) {
  return (
    <div data-theme-toggle style={toggleStyle}>
      <IconButton label="Toggle theme" onClick={onClick}>
        <span data-theme-when-light>
          <Icon name="moon" size={18} />
        </span>
        <span data-theme-when-dark>
          <Icon name="sun" size={18} />
        </span>
      </IconButton>
    </div>
  )
}
