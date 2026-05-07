const today = () => new Date().toISOString().slice(0, 10)

export async function fetchTodayBriefing(supabase) {
  const { data } = await supabase
    .from('daily_briefings')
    .select('body, created_at, briefing_date')
    .eq('briefing_date', today())
    .maybeSingle()

  return data
}

export async function upsertBriefing(supabase, body) {
  const { error } = await supabase
    .from('daily_briefings')
    .upsert({ briefing_date: today(), body }, { onConflict: 'briefing_date' })
  if (error) throw new Error(`upsertBriefing: ${error.message}`)
}
