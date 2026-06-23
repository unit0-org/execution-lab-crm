import { Stack } from '@/ui/layout/Stack'
import { ContactSection } from './ContactSection'
import { BusinessSection } from './BusinessSection'
import { CommitmentSection } from './CommitmentSection'
import { PromoSection } from './PromoSection'

// The full applicant questionnaire, in four sections. Required mirrors
// the server revalidation; defaults prefill an invited applicant (3.2).
export function RegisterFields({ defaults }) {
  return (
    <Stack gap="lg">
      <ContactSection defaults={defaults} />
      <BusinessSection />
      <CommitmentSection />
      <PromoSection />
    </Stack>
  )
}
