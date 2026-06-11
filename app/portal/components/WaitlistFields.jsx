import { Stack } from '@/ui/layout/Stack'
import { WaitlistCohortSection } from './WaitlistCohortSection'
import { WaitlistAboutSection } from './WaitlistAboutSection'

// The waitlist sign-up fields: cohort picker + applicant details.
export function WaitlistFields({ cohorts, selected }) {
  return (
    <Stack gap="lg">
      <WaitlistCohortSection cohorts={cohorts} selected={selected} />
      <WaitlistAboutSection />
    </Stack>
  )
}
