import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Display } from '@/ui/atoms/Display'

const PROGRAM = 'Income First™ Fundamentals'

// Order-summary heading: program kicker + the cohort month/year.
export function SummaryHead({ when }) {
  return (
    <Stack gap="xs">
      <MonoLabel tone="cool" size={10} caps>{PROGRAM}</MonoLabel>
      <Display size="sm">{when.month} {when.year}</Display>
    </Stack>
  )
}
