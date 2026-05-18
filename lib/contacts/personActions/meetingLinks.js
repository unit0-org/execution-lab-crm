import { revalidatePath } from 'next/cache'
import { linkMeetingToContact } from '@/lib/meetings/linkContact'

export async function runLinkMeeting(supabase, fd) {
  const contactId = fd.get('contact_id')
  await linkMeetingToContact(supabase, fd.get('meeting_id'), contactId)
  revalidatePath(`/contacts/${contactId}`)
}
