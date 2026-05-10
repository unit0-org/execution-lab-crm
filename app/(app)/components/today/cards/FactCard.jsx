import { CardShell } from './CardShell'
import { displayPayload, displayName } from '@/lib/cards/displayPayload'

const destinationLabel = (dest) =>
  dest === 'google_contacts' ? 'Google Contacts' : 'memories (CRM)'

export function FactCard({ card }) {
  const p = displayPayload(card)

  return (
    <CardShell
      card={card}
      prompt={`Save this about ${displayName(card)}? · → ${destinationLabel(p.destination)}`}
      body={`"${p.body}"`}
      fieldName="body"
      confirmLabel="Yes"
    />
  )
}
