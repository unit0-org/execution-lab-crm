import { CardShell } from './CardShell'
import { displayPayload, displayName, windowLabel } from '@/lib/cards/displayPayload'

const buildBody = (card) => {
  const p = displayPayload(card)
  const reason = p.reason ? `${p.reason}. ` : ''

  return `${reason}Suggested: ${windowLabel(p.suggestedWindow)}.`
}

export function FollowUpCard({ card }) {
  return (
    <CardShell
      card={card}
      prompt={`Follow up with ${displayName(card)}?`}
      body={buildBody(card)}
      fieldName="reason"
      confirmLabel="Add follow-up task"
    />
  )
}
