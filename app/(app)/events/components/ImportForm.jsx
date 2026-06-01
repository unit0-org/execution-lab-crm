import { Form } from '@/ui/molecules/Form'
import { FileField } from '@/ui/atoms/FileField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { Stack } from '@/ui/layout/Stack'
import { FormError } from '@/ui/molecules/FormError'
import { ImportProgress } from './ImportProgress'

export function ImportForm({ action, error }) {
  return (
    <Form action={action}>
      <Stack gap="md">
        <FileField label="Luma guest CSV" name="file" accept=".csv" />
        <FormError message={error} />
        <ImportProgress />
        <SubmitButton tone="primary">Import</SubmitButton>
      </Stack>
    </Form>
  )
}
