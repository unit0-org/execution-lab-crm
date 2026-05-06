import { revalidatePath } from 'next/cache'

export async function runDisconnectAccountAction(supabase, accountId) {
  await supabase.from('google_accounts').delete().eq('id', accountId)
  revalidatePath('/contacts')
}
