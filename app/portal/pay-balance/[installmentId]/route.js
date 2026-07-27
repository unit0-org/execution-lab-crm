import { resumeBalanceCheckout } from '@/lib/portal/resumeBalanceCheckout'
import { siteOrigin } from '@/lib/portal/siteOrigin'

// Public balance link from the failed-payment email: open a checkout for
// what the seat still owes and hand off to Stripe (or home when there's
// nothing left to pay).
export async function GET(_request, { params }) {
  const { installmentId } = await params
  const url = await resumeBalanceCheckout(installmentId)

  return Response.redirect(url || siteOrigin())
}
