'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { DialogActions } from './DialogActions'

// Shared "confirm delete" dialog body: hidden id, heading, undo warning, and
// the Delete / Cancel actions. `action` is the form action to submit;
// `children` adds any extra hidden fields the action needs.
export function ConfirmDeleteForm({ heading, action, id, onCancel, children }) {
  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      {children}
      <Stack gap="md">
        <Heading level={3}>{heading}</Heading>
        <Text size="sm">This cannot be undone.</Text>
        <DialogActions label="Delete" tone="danger" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
