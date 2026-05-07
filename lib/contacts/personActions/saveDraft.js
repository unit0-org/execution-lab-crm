import { revalidatePath } from 'next/cache'
import { insertTimelineEntry } from '@/lib/timeline/insertEntry'

export async function runSaveDraft(supabase, fd) {
  const id = fd.get('contact_id')
  await insertTimelineEntry(supabase, {
    contactId: id,
    entryType: fd.get('type') || 'note',
    occurredAt: fd.get('occurred_at') || new Date().toISOString(),
    title: fd.get('title') || null,
    body: fd.get('notes') || null,
  })
  revalidatePath('/')
  revalidatePath('/contacts')
  revalidatePath(`/contacts/${id}`)
}
