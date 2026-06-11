import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MetaRow } from '@/ui/molecules/MetaRow'
import { REGISTRANT_ANSWER_FIELDS } from './registrantAnswerFields'
import { filledRows } from './filledRows'

// The registrant's registration-form answers, blanks omitted.
export function RegistrantAnswers({ registration }) {
  const rows = filledRows(registration, REGISTRANT_ANSWER_FIELDS)

  return (
    <Stack gap="sm">
      <MonoLabel caps size={11}>Registration</MonoLabel>
      {rows.map((row) => (
        <MetaRow key={row.label} label={row.label} value={row.value} />
      ))}
    </Stack>
  )
}
