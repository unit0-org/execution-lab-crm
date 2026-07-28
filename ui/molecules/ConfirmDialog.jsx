'use client'

import { TitledModal } from '../organisms/TitledModal'
import { Text } from '../atoms/Text'
import { FormActions } from './FormActions'

/**
 * Confirmation modal; `message`/`confirmLabel`/`tone` are overridable, and
 * `busy` spins the confirm while the action it fires runs.
 */
export function ConfirmDialog({
  open, title, onConfirm, onCancel, busy,
  message = 'This cannot be undone.',
  confirmLabel = 'Delete', tone = 'danger'
}) {
  return (
    <TitledModal open={open} title={title} onClose={onCancel}>
      <Text size="sm">{message}</Text>
      <FormActions label={confirmLabel} tone={tone} busy={busy}
        onConfirm={onConfirm} onCancel={onCancel} />
    </TitledModal>
  )
}
