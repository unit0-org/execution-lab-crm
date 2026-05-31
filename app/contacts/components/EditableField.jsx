'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { useDraft } from '../hooks/useDraft'
import { SaveSlot } from './SaveSlot'
import { updateContactAction } from '../actions'

export function EditableField({ contactId, field, label, value }) {
  const { draft, dirty, change } = useDraft(value)

  return (
    <Form action={updateContactAction}>
      <input type="hidden" name="id" value={contactId} />
      <input type="hidden" name="field" value={field} />
      <Stack gap="sm">
        <TextField label={label} name="value" value={draft}
          onChange={change} />
        <SaveSlot dirty={dirty} />
      </Stack>
    </Form>
  )
}
