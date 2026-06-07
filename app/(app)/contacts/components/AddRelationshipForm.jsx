'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { RelationshipFields } from './RelationshipFields'
import { DialogActions } from './DialogActions'
import { useRelationshipForm } from '../hooks/useRelationshipForm'

export function AddRelationshipForm({ contactId, onSaved, onCancel }) {
  const form = useRelationshipForm(onSaved)

  return (
    <Form action={form.action}>
      <Stack gap="md">
        <Heading level={3}>Add relationship</Heading>
        <RelationshipFields contactId={contactId} contact={form.contact}
          onContact={form.setContact} rel={form.rel} onRel={form.setRel} />
        <FormError message={form.error} />
        <DialogActions label="Add" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
