import { Modal } from './Modal'
import { Stack } from '../layout/Stack'
import { Heading } from '../atoms/Heading'

// A Modal with a titled header row: the title sits top-left while the
// built-in close button sits top-right, so body content never hides under
// the close. Use for any dialog that wants a heading + visible close.
export function TitledModal({ open, title, onClose, wide, children }) {
  return (
    <Modal open={open} onClose={onClose} wide={wide}>
      <Stack gap="md">
        <Heading level={3} gutter="none">{title}</Heading>
        {children}
      </Stack>
    </Modal>
  )
}
