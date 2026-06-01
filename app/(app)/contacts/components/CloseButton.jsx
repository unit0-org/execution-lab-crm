import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function CloseButton({ onClick }) {
  return (
    <IconButton label="Cancel" onClick={onClick}>
      <Icon name="close" size={16} />
    </IconButton>
  )
}
