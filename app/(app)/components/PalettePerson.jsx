import { Avatar } from '@/ui/atoms/Avatar'
import { MenuRow } from '@/ui/molecules/MenuRow'

// One person row in the palette; selecting it opens that contact. Shows
// the full name with the email below it.
export function PalettePerson({ person, active, onPick }) {
  const choose = () => onPick(person.id)
  const avatar = <Avatar size={28} src={person.photo} name={person.name} />

  return (
    <MenuRow onClick={choose} active={active} leading={avatar}
      label={person.name} subtitle={person.subtitle} />
  )
}
