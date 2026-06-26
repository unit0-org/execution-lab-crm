import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function LeverInfoButton({ label, onClick }) {
  return (
    <IconButton label={`What is ${label}?`} onClick={onClick}>
      <Icon name="info" size={14} />
    </IconButton>
  )
}
