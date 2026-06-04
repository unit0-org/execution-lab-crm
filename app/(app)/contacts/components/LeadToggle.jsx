import { TextButton } from '@/ui/atoms/TextButton'

const LABELS = { true: '✓ in leads', false: '✕ excluded' }

// Toggles whether a category counts toward leads (hidden for default).
export function LeadToggle({ leads, onToggle }) {
  if (!onToggle) return null

  return (
    <TextButton type="button" onClick={onToggle}>{LABELS[leads]}</TextButton>
  )
}
