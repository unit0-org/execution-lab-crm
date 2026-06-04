import { headerStyle, titleStyle, chevronStyle } from './Collapsible.styles'
import { Icon } from '../atoms/Icon'

// Clickable section header: a title and a chevron that flips on toggle.
export function CollapsibleHeader({ title, open, onToggle }) {
  const label = open ? `Collapse ${title}` : `Expand ${title}`

  return (
    <button type="button" onClick={onToggle} aria-expanded={open}
      aria-label={label} style={headerStyle}>
      <span style={titleStyle}>{title}</span>
      <span style={chevronStyle(open)}><Icon name="chevron" size={16} /></span>
    </button>
  )
}
