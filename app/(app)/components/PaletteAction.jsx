import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'

// The palette's create row — adds a new person.
export function PaletteAction({ onClick }) {
  return (
    <MenuRow onClick={onClick} label="Add a person"
      leading={<Icon name="plus" size={18} />} />
  )
}
