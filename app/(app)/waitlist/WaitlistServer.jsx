import { listWaitlistAction } from './actions/listWaitlist'
import { listAcceptCohortsAction } from './actions/listAcceptCohorts'
import { WaitlistView } from './components/WaitlistView'

// Server-side initial load for the team waitlist view: who's in line, plus
// the open cohorts (with seats) they can be accepted into.
export async function WaitlistServer() {
  const [entries, cohorts] = await Promise.all([
    listWaitlistAction(), listAcceptCohortsAction()
  ])

  return <WaitlistView entries={entries} cohorts={cohorts} />
}
