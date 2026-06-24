'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from '@/ui/molecules/FormError'
import { ResourceFields } from './ResourceFields'
import { ResourceFormActions } from './ResourceFormActions'
import { useFormAction } from '../hooks/useFormAction'
import { addCohortResourceAction } from '../actions/addCohortResource'

export function ResourceForm({ cohortId, onSaved, onCancel }) {
  const { action, error } = useFormAction(addCohortResourceAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="cohort_id" value={cohortId} />
      <Stack gap="md">
        <Heading level={3}>Add resource</Heading>
        <ResourceFields />
        <FormError message={error} />
        <ResourceFormActions onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
