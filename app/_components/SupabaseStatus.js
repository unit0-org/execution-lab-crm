import { StatusBadge } from './StatusBadge'

export function SupabaseStatus({ status }) {
  return (
    <>
      <StatusBadge ok={status.ok} label={status.ok ? 'connected' : 'unreachable'} />
      <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
        {status.detail}
      </div>
    </>
  )
}
