import { sessionContact } from '@/lib/portal/sessionContact'
import { Confirmation } from '../components/Confirmation'

// Resolve the payer from the Stripe session id and render confirmation.
export async function ConfirmationServer({ searchParams }) {
  const { session_id: sessionId } = await searchParams
  const { name, email } = await sessionContact(sessionId)

  return <Confirmation name={name} email={email} />
}
