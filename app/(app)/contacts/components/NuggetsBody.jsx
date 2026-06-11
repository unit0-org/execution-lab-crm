import { NuggetList } from './NuggetList'
import { ListSkeleton } from './ListSkeleton'

// Skeleton while facts load, then the list of recorded nuggets.
export function NuggetsBody({ nuggets, onChanged }) {
  if (nuggets === undefined) return <ListSkeleton />

  return <NuggetList nuggets={nuggets} onChanged={onChanged} />
}
