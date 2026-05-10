import { CardShell } from './CardShell'
import { displayPayload } from '@/lib/cards/displayPayload'

const formatBody = (p) => {
  const company = p.company ? ` · ${p.company}` : ''
  const email   = p.email ? ` · ${p.email}` : ''

  return `${p.name}${email}${company}`
}

export function NewContactCard({ card }) {
  return (
    <CardShell
      card={card}
      prompt="New contact? · Will be added to Google Contacts and your CRM."
      body={formatBody(displayPayload(card))}
      fieldName="name"
      confirmLabel="Yes, create"
    />
  )
}
