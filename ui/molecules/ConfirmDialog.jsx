'use client'

import { Modal } from '../organisms/Modal'
import { Stack } from '../layout/Stack'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { FormActions } from './FormActions'

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
        <FormActions label={confirmLabel} tone={tone}
          onConfirm={onConfirm} onCancel={onCancel} />
      </Stack>
    </Modal>
  )
}
