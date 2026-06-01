import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { CloseButton } from './CloseButton'

export function AddEmailButtons({ onCancel }) {
  return (
    <>
      <IconButton type="submit" tone="primary" label="Add">
        <Icon name="plus" />
      </IconButton>
      <CloseButton onClick={onCancel} />
    </>
  )
}
