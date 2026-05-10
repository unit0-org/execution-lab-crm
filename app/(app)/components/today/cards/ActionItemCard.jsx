import { CardShell } from './CardShell'
import { displayPayload, displayName } from '@/lib/cards/displayPayload'

const promptText = (card) => {
  const due = displayPayload(card).dueHint
  const tail = due ? ` · Due ${due}` : ''

  return `Action item from your meeting with ${displayName(card)}${tail}`
}

export function ActionItemCard({ card }) {
  const p = displayPayload(card)

  return (
    <CardShell
      card={card}
      prompt={promptText(card)}
      body={`"${p.text}"`}
      fieldName="text"
      confirmLabel="Yes, add"
    />
  )
}
