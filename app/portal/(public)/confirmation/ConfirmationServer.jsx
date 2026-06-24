import { confirmationData } from '@/lib/portal/confirmationData'
import { Confirmation } from '../../components/Confirmation'

// Resolve the payer + cohort from the Stripe session and render the
// "you're in" confirmation.
export async function ConfirmationServer({ searchParams }) {
  const { session_id: sessionId } = await searchParams
  const { name, email, start } = await confirmationData(sessionId)

  return <Confirmation name={name} email={email} start={start} />
}
