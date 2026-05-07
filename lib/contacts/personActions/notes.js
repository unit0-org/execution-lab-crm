import { revalidatePath } from 'next/cache'
import { insertNote, deleteNote, togglePinned } from '@/lib/notes/mutations'

const path = (id) => `/contacts/${id}`

export async function runAddNote(supabase, fd) {
  const id = fd.get('contact_id')
  await insertNote(supabase, { contactId: id, body: fd.get('body'), pinned: fd.get('pinned') === 'on' })
  revalidatePath(path(id))
}

export async function runRemoveNote(supabase, fd) {
  await deleteNote(supabase, fd.get('note_id'))
  revalidatePath(path(fd.get('contact_id')))
}

export async function runPinNote(supabase, fd) {
  await togglePinned(supabase, fd.get('note_id'), fd.get('pinned') === 'true')
  revalidatePath(path(fd.get('contact_id')))
}
