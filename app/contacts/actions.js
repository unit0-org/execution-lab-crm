'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { fetchConnections, refreshAccessToken } from '@/lib/google'

// Server action: pull contacts for one google_accounts row from People API
// and upsert into contacts/contact_emails/contact_phones.
export async function syncAccount(formData) {
  const accountId = formData.get('account_id')
  if (!accountId) return { ok: false, error: 'missing account_id' }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'not signed in' }

  const { data: account, error: accountErr } = await supabase
    .from('google_accounts')
    .select('id, email, refresh_token, access_token')
    .eq('id', accountId)
    .single()

  if (accountErr || !account) {
    return { ok: false, error: accountErr?.message || 'account not found' }
  }
  if (!account.refresh_token) {
    return { ok: false, error: 'no refresh token; reconnect this account' }
  }

  // Always refresh — we don't track expiry yet. Cheap.
  const refreshed = await refreshAccessToken(account.refresh_token)
  const accessToken = refreshed.access_token

  let total = 0
  for await (const batch of fetchConnections(accessToken)) {
    for (const person of batch) {
      const googleContactId = person.resourceName // e.g. "people/c12345"
      const displayName =
        person.names?.[0]?.displayName || person.names?.[0]?.unstructuredName || null

      const { data: contact, error: upsertErr } = await supabase
        .from('contacts')
        .upsert(
          {
            google_account_id: account.id,
            google_contact_id: googleContactId,
            display_name: displayName,
          },
          { onConflict: 'google_contact_id' },
        )
        .select('id')
        .single()

      if (upsertErr || !contact) continue

      // Replace emails and phones (simpler than diffing).
      await supabase.from('contact_emails').delete().eq('contact_id', contact.id)
      const emails = (person.emailAddresses || []).map((e, i) => ({
        contact_id: contact.id,
        email: e.value,
        is_primary: i === 0,
      }))
      if (emails.length) await supabase.from('contact_emails').insert(emails)

      await supabase.from('contact_phones').delete().eq('contact_id', contact.id)
      const phones = (person.phoneNumbers || []).map((p) => ({
        contact_id: contact.id,
        phone: p.value,
        label: p.type || null,
      }))
      if (phones.length) await supabase.from('contact_phones').insert(phones)

      total += 1
    }
  }

  await supabase
    .from('google_accounts')
    .update({
      access_token: accessToken,
      last_synced_at: new Date().toISOString(),
    })
    .eq('id', account.id)

  revalidatePath('/contacts')
  return { ok: true, total }
}

export async function disconnectAccount(formData) {
  const accountId = formData.get('account_id')
  if (!accountId) return

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  // Cascade deletes contacts via FK ON DELETE CASCADE.
  await supabase.from('google_accounts').delete().eq('id', accountId)
  revalidatePath('/contacts')
}
