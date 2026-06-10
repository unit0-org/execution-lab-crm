import { resumeCheckout } from '@/lib/portal/resumeCheckout'
import { siteOrigin } from '@/lib/portal/siteOrigin'

// Public payment-reminder link: open a fresh checkout for a pending
// registration and hand off to Stripe (or home when nothing to pay).
export async function GET(_request, { params }) {
  const { registrationId } = await params
  const url = await resumeCheckout(registrationId)

  return Response.redirect(url || siteOrigin())
}
