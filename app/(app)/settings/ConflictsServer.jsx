import { listConflictsAction } from './actions/listConflicts'
import { ConflictsView } from './components/ConflictsView'

// Server-side load for the sync-conflicts tab.
export async function ConflictsServer() {
  const conflicts = await listConflictsAction()

  return <ConflictsView conflicts={conflicts} />
}
