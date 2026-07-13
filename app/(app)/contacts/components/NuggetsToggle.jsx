'use client'

import { TextButton } from '@/ui/atoms/TextButton'

const toggleLabel = (open, count) => (open ? 'Collapse' : `Expand (${count})`)

// Opens the full card layout. Always offered when there is at least one
// fact — the rows preview alone has no way to edit or remove one.
export function NuggetsToggle({ count, open, onToggle }) {
  if (!count) return null

  return (
    <TextButton type="button" onClick={onToggle}>
      {toggleLabel(open, count)}
    </TextButton>
  )
}
