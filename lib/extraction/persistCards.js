import { insertCard } from '@/lib/cards/mutations'
import { resolveContactId, primaryExternalEmail } from './resolveContact'

const insertOne = async (supabase, ctx, type, payload, fallback) => {
  const contactId = await resolveContactId(supabase, payload.contactEmail, fallback)
  await insertCard(supabase, {
    meetingId: ctx.meeting.id, contactId, cardType: type, payload, priority: type === 'action_item' ? 70 : 50,
  })
}

export async function persistExtractedCards(supabase, ctx, extracted) {
  const fallback = primaryExternalEmail(ctx.externals)
  for (const a of extracted.actions || []) {
    if (a.owner === 'them') continue
    await insertOne(supabase, ctx, 'action_item', a, fallback)
  }
  for (const f of extracted.facts     || []) await insertOne(supabase, ctx, 'fact', f, fallback)
  for (const c of extracted.newContacts || []) await insertOne(supabase, ctx, 'new_contact', { ...c, contactEmail: c.email }, null)
  if (extracted.followUp?.should) await insertOne(supabase, ctx, 'follow_up', extracted.followUp, fallback)
}
