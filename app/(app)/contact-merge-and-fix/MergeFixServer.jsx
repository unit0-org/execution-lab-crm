import { listDuplicateGroupsAction } from './actions/listDuplicateGroups'
import { listFixSuggestionsAction } from './actions/listFixSuggestions'
import { MergeFixView } from './components/MergeFixView'

// Server-side initial load of the surface's two sections — duplicate groups
// and safe fixes — handed to the client view.
export async function MergeFixServer() {
  const [groups, fixes] = await Promise.all([
    listDuplicateGroupsAction(), listFixSuggestionsAction()
  ])

  return <MergeFixView initialGroups={groups} initialFixes={fixes} />
}
