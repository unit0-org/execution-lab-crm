import { revalidatePath } from 'next/cache'
import { snoozeFlag, resolveFlag } from '@/lib/follow_ups/mutations'

export async function runSnoozeFlag(supabase, fd) {
  await snoozeFlag(supabase, fd.get('flag_id'), fd.get('due_date'))
  revalidatePath('/follow-ups')
  revalidatePath('/')
}

export async function runResolveFlag(supabase, fd) {
  await resolveFlag(supabase, fd.get('flag_id'))
  revalidatePath('/follow-ups')
  revalidatePath('/')
}
