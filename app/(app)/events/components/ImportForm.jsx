import { Form } from '@/ui/molecules/Form'
import { FileField } from '@/ui/atoms/FileField'
import { FormActions } from '@/ui/molecules/FormActions'
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
        <FormActions label="Import" />
      </Stack>
    </Form>
  )
}
