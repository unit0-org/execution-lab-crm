'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TextField } from '@/ui/atoms/TextField'
import { FormError } from '@/ui/molecules/FormError'
import { ResourceFormActions } from './ResourceFormActions'
import { useFormAction } from '../hooks/useFormAction'
import { addCohortFolderAction } from '../actions/addCohortFolder'

export function FolderForm({ cohortId, onSaved, onCancel }) {
  const { action, error } = useFormAction(addCohortFolderAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="cohort_id" value={cohortId} />
      <Stack gap="md">
        <Heading level={3}>Add folder</Heading>
        <TextField label="Folder name" name="name" required
          placeholder="e.g. Session 1" />
        <FormError message={error} />
        <ResourceFormActions onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
