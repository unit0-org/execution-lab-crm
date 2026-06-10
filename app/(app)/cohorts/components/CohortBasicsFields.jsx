import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'

export function CohortBasicsFields({ values }) {
  return (
    <>
      <TextField label="Label" name="label"
        defaultValue={values.label} />
      <TextField label="Start date" name="start_date" type="date"
        defaultValue={values.start_date} />
      <TextField label="Capacity" name="capacity" type="number"
        defaultValue={values.capacity} />
      <TextArea label="Description" name="description"
        defaultValue={values.description} />
    </>
  )
}
