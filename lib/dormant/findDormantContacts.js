// Active contacts whose most recent meeting ended > 6 weeks ago and
// have no pending follow-up card or open follow-up flag.
const SIX_WEEKS_DAYS = 42

const cutoff = () => new Date(Date.now() - SIX_WEEKS_DAYS * 86400000).toISOString()

export async function findDormantContacts(supabase) {
  const { data } = await supabase.rpc('dormant_contacts', { since: cutoff() })

  return data || []
}
