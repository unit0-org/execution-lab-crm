import { TextField } from '@/ui/atoms/TextField'

// The cohort's registration window. Left blank, each date defaults from the
// rule: opens 15 days before start, closes 10 days before.
export function CohortWindowFields({ values }) {
  return (
    <>
      <TextField label="Registration opens" name="registration_opens_at"
        type="date" defaultValue={values.registration_opens_at} />
      <TextField label="Registration closes" name="registration_closes_at"
        type="date" defaultValue={values.registration_closes_at} />
    </>
  )
}
