import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// The lightning button that opens the automation menu.
export function AutomationTrigger({ onClick }) {
  return (
    <IconButton label="Automation" onClick={onClick}>
      <Icon name="bolt" size={18} />
    </IconButton>
  )
}
