// Live progress for one google_accounts row. Updates are best-effort —
// a failed bump must never abort the sync itself.

const safe = (p) => p.then(() => undefined).catch(() => undefined)

export const beginSync = (s, id) => safe(s.from('google_accounts').update({
  sync_status: 'running',
  sync_started_at: new Date().toISOString(),
  sync_completed_at: null,
  sync_error: null,
  sync_phase: 'starting',
  sync_contacts_done: 0,
  sync_calendar_done: 0,
  sync_meet_done: 0,
}).eq('id', id))

export const setPhase = (s, id, phase) =>
  safe(s.from('google_accounts').update({ sync_phase: phase }).eq('id', id))

export const bump = (s, id, fields) =>
  safe(s.from('google_accounts').update(fields).eq('id', id))

export const finishSync = (s, id, error) => safe(s.from('google_accounts').update({
  sync_status: error ? 'error' : 'done',
  sync_completed_at: new Date().toISOString(),
  sync_error: error || null,
  sync_phase: null,
}).eq('id', id))
