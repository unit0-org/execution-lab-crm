import { routeActionItem } from './routeAction'
import { routeFact } from './routeFact'
import { routeNewContact } from './routeNewContact'
import { routeFollowUp } from './routeFollowUp'

const ROUTERS = {
  action_item: routeActionItem,
  fact:        routeFact,
  new_contact: routeNewContact,
  follow_up:   routeFollowUp,
}

export async function dispatchRouting(supabase, card, owner) {
  const fn = ROUTERS[card.card_type]
  if (!fn) throw new Error(`No router for ${card.card_type}`)
  await fn(supabase, card, owner)
}
