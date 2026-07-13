import { Icon } from '@/ui/atoms/Icon'
import { savedCheckStyle } from './SavedCheck.styles'

/**
 * Success check that fades in briefly after an autosave; always reserves
 * its space (opacity toggles), so nothing shifts.
 */
export function SavedCheck({ show }) {
  return (
    <span style={savedCheckStyle(show)}>
      <Icon name="check" size={14} />
    </span>
  )
}
