import { fetchNotes } from '@/lib/notes/queries'
import { fetchResources } from '@/lib/resources/queries'
import { getPerson } from './getPerson'
import { getPersonExtras } from './getPersonExtras'
import { getTimeline } from './getTimeline'
import { getLinkableMeetings } from './getLinkableMeetings'

// Aggregate everything the person detail page needs. Returns null if
// the contact doesn't exist so the caller can call notFound().
export async function getPersonPageData(supabase, id) {
  const person = await getPerson(supabase, id)
  if (!person) return null
  const [extras, timeline, notes, resources, linkable] = await Promise.all([
    getPersonExtras(supabase, id),
    getTimeline(supabase, id),
    fetchNotes(supabase, id),
    fetchResources(supabase, id),
    getLinkableMeetings(supabase, id),
  ])

  return { person, extras, timeline, notes, resources, linkable }
}
