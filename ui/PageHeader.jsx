const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}

// Top-of-page header with a title slot and actions slot.
export function PageHeader({ title, actions }) {
  return (
    <header style={headerStyle}>
      {title}
      {actions}
    </header>
  )
}
