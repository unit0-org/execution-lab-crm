import { lineStyle, partStyle, phaseStyle } from './SyncProgressLine.styles'

const part = (label, n) => n > 0 ? `${label} ${n}` : null

export function SyncProgressLine({ progress }) {
  const parts = [
    part('contacts', progress.sync_contacts_done),
    part('events',   progress.sync_calendar_done),
    part('meets',    progress.sync_meet_done),
  ].filter(Boolean)

  if (!parts.length) return <div style={phaseStyle}>{progress.sync_phase || 'starting…'}</div>

  return <div style={lineStyle}>{parts.map((p) => <span key={p} style={partStyle}>{p}</span>)}</div>
}
