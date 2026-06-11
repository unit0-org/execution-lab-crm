import { Stack } from '@/ui/layout/Stack'
import { ContactSection } from './ContactSection'
import { BusinessSection } from './BusinessSection'
import { CommitmentSection } from './CommitmentSection'

// The full applicant questionnaire, in three sections. Required mirrors
// the server revalidation; defaults prefill an invited applicant (3.2).
export function RegisterFields({ defaults }) {
  return (
    <Stack gap="lg">
      <ContactSection defaults={defaults} />
      <BusinessSection />
      <CommitmentSection />
    </Stack>
  )
}
