'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { DialogActions } from './DialogActions'
import { deleteContactAction } from '../actions/deleteContact'

export function ConfirmDelete({ contactId, onCancel }) {
  return (
    <Form action={deleteContactAction}>
      <input type="hidden" name="id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>Delete contact</Heading>
        <Text size="sm">This cannot be undone.</Text>
        <DialogActions label="Delete" tone="danger" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
