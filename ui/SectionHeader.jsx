const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem',
}

export function SectionHeader({ children }) {
  return <div style={headerStyle}>{children}</div>
}
