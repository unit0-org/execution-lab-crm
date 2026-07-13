import { Icon } from './Icon'
import { GearIcon } from './GearIcon'

/** Sidebar nav glyph: the cog for Settings, otherwise a line icon. */
export function NavIcon({ icon }) {
  if (icon === 'gear') return <GearIcon size={18} />

  return <Icon name={icon} size={18} />
}
