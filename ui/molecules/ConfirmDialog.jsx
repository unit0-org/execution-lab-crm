'use client'

import { Modal } from '../organisms/Modal'
import { Stack } from '../layout/Stack'
import { Inline } from '../layout/Inline'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

const MESSAGE = 'This cannot be undone.'

export function ConfirmDialog({ open, title, onConfirm, onCancel }) {
  return (
    <Modal open={open} onClose={onCancel}>
      <Stack gap="md">
        <Heading level={3}>{title}</Heading>
        <Text size="sm">{MESSAGE}</Text>
        <Inline gap="sm">
          <Button tone="danger" size="sm" onClick={onConfirm}>Delete</Button>
          <Button size="sm" onClick={onCancel}>Cancel</Button>
        </Inline>
      </Stack>
    </Modal>
  )
}
