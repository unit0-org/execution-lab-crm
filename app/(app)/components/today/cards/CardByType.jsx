import { ActionItemCard } from './ActionItemCard'
import { FactCard } from './FactCard'
import { NewContactCard } from './NewContactCard'
import { FollowUpCard } from './FollowUpCard'

const REGISTRY = {
  action_item: ActionItemCard,
  fact:        FactCard,
  new_contact: NewContactCard,
  follow_up:   FollowUpCard,
}

export function CardByType({ card }) {
  const Component = REGISTRY[card.card_type]

  return Component ? <Component card={card} /> : null
}
