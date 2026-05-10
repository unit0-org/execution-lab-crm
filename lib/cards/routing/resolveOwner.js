import { refreshAccessToken } from '@/lib/google/tokens'

const fromMeeting = async (supabase, meetingId) => {
  if (!meetingId) return null
  const { data } = await supabase.from('meetings').select('owner_account_id').eq('id', meetingId).maybeSingle()

  return data?.owner_account_id || null
}

const fromContact = async (supabase, contactId) => {
  if (!contactId) return null
  const { data } = await supabase.from('contacts').select('google_account_id').eq('id', contactId).maybeSingle()

  return data?.google_account_id || null
}

export async function resolveOwnerAccount(supabase, card) {
  const accountId = (await fromMeeting(supabase, card.meeting_id)) || (await fromContact(supabase, card.contact_id))
  if (!accountId) throw new Error('No Google account to route through')
  const { data } = await supabase
    .from('google_accounts').select('id, refresh_token, tasks_list_id').eq('id', accountId).single()
  const { access_token } = await refreshAccessToken(data.refresh_token)

  return { account: data, accessToken: access_token }
}
