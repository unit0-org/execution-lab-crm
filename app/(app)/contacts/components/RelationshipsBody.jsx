import { RelationshipList } from './RelationshipList'

// The list of relationships, which shows its own empty state.
export function RelationshipsBody({ items, onChanged }) {
  return <RelationshipList items={items} onChanged={onChanged} />
}
