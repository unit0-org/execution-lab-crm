import { Stack } from '@/ui/layout/Stack'
import { ContactSection } from './ContactSection'
import { BusinessSection } from './BusinessSection'
import { CommitmentSection } from './CommitmentSection'
import { PromoSection } from './PromoSection'
import { PaymentPlanSection } from './PaymentPlanSection'

// The full applicant questionnaire, in five sections. Required mirrors
// the server revalidation; defaults prefill an invited applicant (3.2).
// The payment choice shows only where the cohort offers the 50/50 plan.
export function RegisterFields({ defaults, promo, plan }) {
  return (
    <Stack gap="lg">
      <ContactSection defaults={defaults} />
      <BusinessSection />
      <CommitmentSection />
      <PaymentPlanSection plan={plan} />
      <PromoSection defaultValue={promo} />
    </Stack>
  )
}
