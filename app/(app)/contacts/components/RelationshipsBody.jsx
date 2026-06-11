import { RelationshipList } from './RelationshipList'
import { ListSkeleton } from './ListSkeleton'

// Skeleton while relationships load (the hook starts as null), then the
// list, which shows its own empty state.
export function RelationshipsBody({ items, onChanged }) {
  if (items === null) return <ListSkeleton />

  return <RelationshipList items={items} onChanged={onChanged} />
}
