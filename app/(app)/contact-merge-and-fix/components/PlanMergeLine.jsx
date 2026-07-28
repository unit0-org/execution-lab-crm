import { PlanLine } from './PlanLine'
import { contactLine } from '../hooks/contactLine'

const survivorOf = (merge) =>
  merge.group.contacts.find((contact) => contact.id === merge.winnerId)

// Names who stays, so a batched merge is never a mystery.
export function PlanMergeLine({ merge, done }) {
  const count = merge.group.contacts.length

  return (
    <PlanLine done={done}>
      Merge {count} contacts — keeps {contactLine(survivorOf(merge))}
    </PlanLine>
  )
}
