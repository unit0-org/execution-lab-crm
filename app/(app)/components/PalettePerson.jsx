import { Avatar } from '@/ui/atoms/Avatar'
import { MenuRow } from '@/ui/molecules/MenuRow'

// One result row in the palette (a person or a company); selecting it
// opens that record. Shows the name with its subtitle below.
export function PalettePerson({ person, active, onPick }) {
  const choose = () => onPick(person.href)
  const avatar = <Avatar size={28} src={person.photo} name={person.name} />

  return (
    <MenuRow onClick={choose} active={active} leading={avatar}
      label={person.name} subtitle={person.subtitle} />
  )
}
