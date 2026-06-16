import { Stack } from '@/ui/layout/Stack'
import { PaletteAction } from './PaletteAction'
import { PalettePerson } from './PalettePerson'

// The palette's selectable rows: the "add a person" action on top, then
// the matching people.
export function PaletteResults({ people, onPick, onAdd }) {
  return (
    <Stack gap="xs">
      <PaletteAction onClick={onAdd} />
      {people.map((person, index) => (
        <PalettePerson key={person.id} person={person}
          active={index === 0} onPick={onPick} />
      ))}
    </Stack>
  )
}
