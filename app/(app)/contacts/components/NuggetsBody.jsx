import { NuggetList } from './NuggetList'

// The list of recorded nuggets (seeded from the server, never undefined).
export function NuggetsBody({ nuggets, onChanged }) {
  return <NuggetList nuggets={nuggets} onChanged={onChanged} />
}
