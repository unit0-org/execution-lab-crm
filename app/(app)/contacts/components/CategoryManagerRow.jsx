import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { SwatchSelect } from '@/ui/molecules/SwatchSelect'

export function CategoryManagerRow({ category, onColor, onLeads, onDelete }) {
  const id = category.id
  const lead = category.include_in_leads

  return (
    <Tr>
      <Td>{category.name}</Td>
      <Td><SwatchSelect value={category.color}
        onPick={(color) => onColor(id, color)} /></Td>
      <Td>
        <Checkbox checked={lead} label="Count toward leads"
          onChange={() => onLeads(id, !lead)} />
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
