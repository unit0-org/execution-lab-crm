import { NuggetList } from './NuggetList'
import { NuggetRows } from './NuggetRows'

const PREVIEW_COUNT = 3

// Collapsed → the newest 3 facts as rows; expanded → every fact in the full
// card layout, where it can be edited, removed and read for provenance.
export function NuggetsPanel({ nuggets, open, onChanged }) {
  if (open) return <NuggetList nuggets={nuggets} onChanged={onChanged} />

  return <NuggetRows nuggets={nuggets.slice(0, PREVIEW_COUNT)} />
}
