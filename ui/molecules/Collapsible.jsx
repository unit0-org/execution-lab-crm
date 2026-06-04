import { CollapsibleHeader } from './CollapsibleHeader'
import { CollapsibleBody } from './CollapsibleBody'

// A titled section that expands/collapses its children in place.
export function Collapsible({ title, open, onToggle, children }) {
  return (
    <div>
      <CollapsibleHeader title={title} open={open} onToggle={onToggle} />
      <CollapsibleBody open={open}>{children}</CollapsibleBody>
    </div>
  )
}
