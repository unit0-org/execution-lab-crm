import { Inline } from '@/ui/layout/Inline'
import { TextButton } from '@/ui/atoms/TextButton'
import { LeadToggle } from './LeadToggle'

export function CategoryRow(props) {
  const { label, active, leads, onSelect, onToggleLeads } = props
  const mark = active ? '● ' : '○ '

  return (
    <Inline gap="sm">
      <TextButton type="button" onClick={onSelect}>{mark + label}</TextButton>
      <LeadToggle leads={leads} onToggle={onToggleLeads} />
    </Inline>
  )
}
