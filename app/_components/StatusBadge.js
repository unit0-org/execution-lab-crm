export function StatusBadge({ ok, label }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.125rem 0.5rem',
      borderRadius: 4,
      fontSize: '0.875rem',
      background: ok ? '#dcfce7' : '#fee2e2',
      color: ok ? '#166534' : '#991b1b',
    }}>
      {label}
    </span>
  )
}
