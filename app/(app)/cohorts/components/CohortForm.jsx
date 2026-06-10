'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { CohortFields } from './CohortFields'
import { useCohortFormAction } from '../hooks/useCohortFormAction'

export function CohortForm({ cohort, onSaved }) {
  const { action, error } = useCohortFormAction(cohort, onSaved)

  return (
    <Form action={action}>
      <Stack gap="md">
        <CohortFields cohort={cohort} />
        <Button tone="primary" type="submit">Save cohort</Button>
        <FormError message={error} />
      </Stack>
    </Form>
  )
}
