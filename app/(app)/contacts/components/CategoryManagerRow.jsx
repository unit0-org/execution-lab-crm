import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { ToggleBadge } from '@/ui/atoms/ToggleBadge'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function CategoryManagerRow({ category, onLeads, onDelete }) {
  const lead = category.include_in_leads
  const flip = () => onLeads(category.id, !lead)
  const del = () => onDelete(category.id)
  const tone = lead ? 'success' : 'neutral'
  const text = lead ? 'In leads' : 'Excluded'

  return (
    <Tr>
      <Td>{category.name}</Td>
      <Td>
        <ToggleBadge tone={tone} onClick={flip} label="Toggle leads">
          {text}
        </ToggleBadge>
      </Td>
      <Td>
        <IconButton tone="danger" label="Delete category" onClick={del}>
          <Icon name="trash" size={14} />
        </IconButton>
      </Td>
    </Tr>
  )
}
