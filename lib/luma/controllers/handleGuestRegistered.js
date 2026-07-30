import { handleGuestWebhook } from './handleGuestWebhook'
import { buildRegistrantFromGuest } from './buildRegistrantFromGuest'
import { reportEventRegistration }
  from '@/lib/linkedin/controllers/reportEventRegistration'

// A first-time registration is both an import and an ad conversion: fold
// the guest in as usual, then report it to LinkedIn. Only this action
// reports — guest.updated and ticket.registered fire again for the same
// person (approval, check-in), and would double-count the conversion.
export async function handleGuestRegistered(data) {
  const imported = await handleGuestWebhook(data)
  const registrant = buildRegistrantFromGuest(data.guest || data)

  await reportEventRegistration(imported.event.id, registrant)

  return imported
}
