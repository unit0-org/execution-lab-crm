'use client'

import { Modal } from '../organisms/Modal'
import { Stack } from '../layout/Stack'
import { Inline } from '../layout/Inline'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

/** Confirmation modal; `message`/`confirmLabel`/`tone` are overridable. */
export function ConfirmDialog({
  open, title, onConfirm, onCancel,
  message = 'This cannot be undone.',
  confirmLabel = 'Delete', tone = 'danger'
}) {
  return (
    <Modal open={open} onClose={onCancel}>
      <Stack gap="md">
        <Heading level={3}>{title}</Heading>
        <Text size="sm">{message}</Text>
        <Inline gap="sm">
          <Button tone={tone} size="sm" onClick={onConfirm}>
            {confirmLabel}
          </Button>
          <Button size="sm" onClick={onCancel}>Cancel</Button>
        </Inline>
      </Stack>
    </Modal>
  )
}
