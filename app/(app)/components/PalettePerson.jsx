import { Avatar } from '@/ui/atoms/Avatar'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MenuRow } from '@/ui/molecules/MenuRow'

// One person row in the palette; selecting it opens that contact.
export function PalettePerson({ person, onPick }) {
  const choose = () => onPick(person.id)
  const avatar = <Avatar size={28} src={person.photo} name={person.name} />
  const meta = <MonoLabel>{person.subtitle}</MonoLabel>

  return (
    <MenuRow onClick={choose} leading={avatar} label={person.name}
      meta={meta} />
  )
}
