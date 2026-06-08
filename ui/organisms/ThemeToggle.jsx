import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { themeToggleStyle } from './ThemeToggle.styles'

// Floating top-right light/dark switch; icon shows the mode you'd switch to.
// Dimmed when idle, solid on hover (see globals.css [data-theme-toggle]).
export function ThemeToggle({ onClick }) {
  return (
    <div data-theme-toggle style={themeToggleStyle}>
      <IconButton label="Toggle theme" onClick={onClick}>
        <span data-theme-when-light><Icon name="moon" size={16} /></span>
        <span data-theme-when-dark><Icon name="sun" size={16} /></span>
      </IconButton>
    </div>
  )
}
