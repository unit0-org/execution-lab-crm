// Runs the three sync sources in parallel, marks the row complete or
// errored, and revalidates the dependent routes. Errors are caught
// per source so one failing source can't take the others down.
export async function runDetached(d) {
  const { supabase, account, runSync, syncCalendarAccount, syncMeetAccount } = d
  const errs = []
  const guard = (label, p) => p.catch((e) => { errs.push(`${label}: ${e.message}`) })

  await d.setPhase(supabase, account.id, 'syncing')
  await Promise.all([
    guard('contacts', runSync(supabase, account)),
    guard('calendar', syncCalendarAccount(supabase, account)),
    guard('meet',     syncMeetAccount(supabase, account)),
  ])

  await d.finishSync(supabase, account.id, errs.join('; ') || null)
  d.revalidatePath('/contacts')
  d.revalidatePath('/')
}
