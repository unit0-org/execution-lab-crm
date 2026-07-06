'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { DialogActions } from './DialogActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { removeNoteAction } from '../actions/removeNote'

export function ConfirmDeleteNote({ note, onDeleted, onCancel }) {
  const { action } = useFormAction(removeNoteAction, onDeleted)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={note.id} />
      <Stack gap="md">
        <Heading level={3}>Delete note</Heading>
        <Text size="sm">This cannot be undone.</Text>
        <DialogActions label="Delete" tone="danger" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
