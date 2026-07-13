import { Collapsible } from '@/ui/molecules/Collapsible'
import { NuggetRows } from './NuggetRows'
import { NuggetList } from './NuggetList'

const PREVIEW_COUNT = 3

// Collapsed → the newest 3 facts as rows; expanded → every fact in the full
// card layout, where it can be edited, removed and read for provenance.
export function NuggetsBody({ nuggets, onChanged, onAdd }) {
  const preview = <NuggetRows nuggets={nuggets.slice(0, PREVIEW_COUNT)} />

  return (
    <Collapsible title="What we know" defaultOpen={false}
      addLabel="Add nugget" onAdd={onAdd} preview={preview}>
      <NuggetList nuggets={nuggets} onChanged={onChanged} />
    </Collapsible>
  )
}
