import { Stack } from '@/ui/layout/Stack'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { RadioCards } from '@/ui/molecules/RadioCards'
import { COMMIT_OPTIONS } from './registerOptions'

const QUESTION = 'The cohort meets weekly with work in between. Can you '
  + 'commit ~3–5 hrs/week for 8 weeks?'

// Time commitment — sets expectations before payment.
export function CommitmentSection() {
  return (
    <Stack gap="md">
      <SectionLabel n="03">Commitment</SectionLabel>
      <RadioCards label={QUESTION} name="commitment"
        options={COMMIT_OPTIONS} required />
    </Stack>
  )
}
