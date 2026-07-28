import { Text } from '@/ui/atoms/Text'
import { contactLine } from '../hooks/contactLine'

const survivorOf = (merge) =>
  merge.group.contacts.find((contact) => contact.id === merge.winnerId)

// Names who stays, so a batched merge is never a mystery.
export function PlanMergeLine({ merge }) {
  const count = merge.group.contacts.length

  return (
    <Text size="sm">
      Merge {count} contacts — keeps {contactLine(survivorOf(merge))}
    </Text>
  )
}
