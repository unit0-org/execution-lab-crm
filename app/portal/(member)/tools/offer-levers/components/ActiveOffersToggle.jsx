import { ToggleBadge } from '@/ui/atoms/ToggleBadge'

const caret = (open) => (open ? '▾' : '▸')

// A pill under an offer card that expands/collapses its active-offer tree.
export function ActiveOffersToggle({ count, open, onToggle }) {
  const text = caret(open) + ' ' + count + ' active'

  return (
    <ToggleBadge tone="accent" onClick={onToggle} label="Toggle active offers">
      {text}
    </ToggleBadge>
  )
}
