// Probe Supabase reachability via a head-only count on contacts.
export async function checkSupabase(supabase) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return { ok: false, detail: 'Missing Supabase env vars' }

  try {
    const { error } = await supabase
      .from('contacts')
      .select('id', { count: 'exact', head: true })
    if (error) return { ok: false, detail: error.message }
    return { ok: true, detail: `Connected to ${new URL(url).host}` }
  } catch (err) {
    return { ok: false, detail: err.message }
  }
}
