import { listDuplicateGroupsAction } from './actions/listDuplicateGroups'
import { MergeFixView } from './components/MergeFixView'

// Server-side initial load of duplicate groups, handed to the client view
// (pages/components are synchronous; the async boundary lives here).
export async function MergeFixServer() {
  const groups = await listDuplicateGroupsAction()

  return <MergeFixView initialGroups={groups} />
}
