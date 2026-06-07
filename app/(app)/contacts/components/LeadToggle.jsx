import { ToggleBadge } from '@/ui/atoms/ToggleBadge'

// Toggles whether a label's contacts count toward leads.
export function LeadToggle({ on, onToggle }) {
  const tone = on ? 'success' : 'neutral'
  const text = on ? 'In leads' : 'Excluded'

  return (
    <ToggleBadge tone={tone} onClick={onToggle} label="Toggle leads">
      {text}
    </ToggleBadge>
  )
}
