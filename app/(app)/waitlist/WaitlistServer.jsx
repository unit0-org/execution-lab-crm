import { listWaitlistAction } from './actions/listWaitlist'
import { WaitlistView } from './components/WaitlistView'

// Server-side initial load for the team waitlist view.
export async function WaitlistServer() {
  const entries = await listWaitlistAction()

  return <WaitlistView entries={entries} />
}
