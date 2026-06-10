import { convertByEmail } from '@/lib/waitlist/controllers/convertByEmail'

// Once a registration is paid, drop the payer from the waitlist. Swallows
// any failure so it never breaks the payment webhook (Story 3.2).
export async function convertWaitlistEntry(organizationId, email) {
  try {
    await convertByEmail(organizationId, email)
  } catch {
    // best-effort: payment processing must always complete
  }
}
