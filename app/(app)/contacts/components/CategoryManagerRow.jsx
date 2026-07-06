import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { SwatchSelect } from '@/ui/molecules/SwatchSelect'

export function CategoryManagerRow({ category, onColor, onLeads, onDelete }) {
  const id = category.id
  const lead = category.include_in_leads
  const remove = () => onDelete(id)

  return (
    <Tr onDelete={remove} deleteTitle="Delete label">
      <Td>{category.name}</Td>
      <Td><SwatchSelect value={category.color}
        onPick={(color) => onColor(id, color)} /></Td>
      <Td>
        <Checkbox checked={lead} label="Count toward leads"
          onChange={() => onLeads(id, !lead)} />
      </Td>
    </Tr>
  )
}
