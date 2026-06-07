import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { LabelColorPicker } from './LabelColorPicker'
import { LeadToggle } from './LeadToggle'

export function CategoryManagerRow({ category, onColor, onLeads, onDelete }) {
  const id = category.id

  return (
    <Tr>
      <Td>{category.name}</Td>
      <Td>
        <LabelColorPicker value={category.color}
          onPick={(color) => onColor(id, color)} />
      </Td>
      <Td>
        <LeadToggle on={category.include_in_leads}
          onToggle={() => onLeads(id, !category.include_in_leads)} />
      </Td>
      <Td>
        <IconButton tone="danger" label="Delete label"
          onClick={() => onDelete(id)}>
          <Icon name="trash" size={14} />
        </IconButton>
      </Td>
    </Tr>
  )
}
