import { Inline } from '@/ui/layout/Inline'
import { Token } from '@/ui/molecules/Token'

const personLabel = (person) => person.name || person.email

// The people staged to be shared with, as removable pills.
export function PickedTokens({ people, onRemove }) {
  if (!people.length) return null

  return (
    <Inline gap="sm">
      {people.map((person) => (
        <Token key={person.contactId} label={personLabel(person)}
          onRemove={() => onRemove(person.contactId)} />
      ))}
    </Inline>
  )
}
