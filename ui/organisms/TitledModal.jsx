import { Modal } from './Modal'
import { Stack } from '../layout/Stack'
import { Heading } from '../atoms/Heading'

/**
 * Modal with a titled header row: the title sits top-left, the close
 * button top-right, so body content never sits under it. Prefer this
 * over a bare `Modal` for any titled dialog.
 */
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
