import { confirmCard } from './mutations'
import { loadCardContext } from './routing/loadCardContext'
import { resolveOwnerAccount } from './routing/resolveOwner'
import { dispatchRouting } from './routing/dispatch'

export async function confirmAndRoute(supabase, cardId) {
  const card  = await loadCardContext(supabase, cardId)
  const owner = await resolveOwnerAccount(supabase, card)
  await dispatchRouting(supabase, card, owner)
  await confirmCard(supabase, cardId)

  return { ok: true }
}
