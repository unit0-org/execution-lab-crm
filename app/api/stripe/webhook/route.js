import { verifyWebhook } from '@/lib/stripe/verifyWebhook'
import { importCharge } from '@/lib/purchase/controllers/importCharge'
import { invoicePurchase } from '@/lib/invoice/controllers/invoicePurchase'

const PAID = 'charge.succeeded'

// Record the charge, then auto-issue invoices for orgs that opted in.
const onCharge = async (charge) => {
  const result = await importCharge(charge)

  if (!result.skipped) await invoicePurchase(result.purchaseId)
}

// Stripe calls this on new charges; verify, then record + invoice.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  try {
    const event = verifyWebhook(body, signature)

    if (event.type === PAID) await onCharge(event.data.object)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
