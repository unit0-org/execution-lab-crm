// PR 5 wires Google Tasks / Contacts / memories writes here. For now,
// confirming a card just flips its status to 'confirmed' so the queue
// clears. The real routing arrives in PR 5.
import { confirmCard } from './mutations'

export async function confirmAndRoute(supabase, cardId) {
  await confirmCard(supabase, cardId)

  return { ok: true }
}
