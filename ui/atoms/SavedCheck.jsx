import { Icon } from '@/ui/atoms/Icon'
import { savedCheckStyle } from './SavedCheck.styles'

// A success check shown for a moment after a field autosaves. Always
// occupies its space (opacity toggles) so nothing shifts.
export function SavedCheck({ show }) {
  return (
    <span style={savedCheckStyle(show)}>
      <Icon name="check" size={14} />
    </span>
  )
}
