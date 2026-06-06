import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { closeStyle } from './Modal.styles'

// The X button pinned to a modal panel's top-right corner.
export function ModalClose({ onClose }) {
  return (
    <div style={closeStyle}>
      <IconButton label="Close" onClick={onClose}>
        <Icon name="close" size={18} />
      </IconButton>
    </div>
  )
}
