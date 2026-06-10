import { listCohortsAction } from './actions/listCohorts'
import { CohortsView } from './components/CohortsView'

// Server-side initial load for the cohorts list: fetch the first render
// on the server, then hand it to the client view.
export async function CohortsServer() {
  const cohorts = await listCohortsAction()

  return <CohortsView initialCohorts={cohorts} />
}
