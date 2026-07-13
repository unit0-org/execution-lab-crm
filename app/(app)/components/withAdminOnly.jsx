// Gating HOC: render the wrapped control only for admins. Identity lives
// here so the control itself stays unaware of who is viewing.
export function withAdminOnly(Control) {
  return function AdminOnly({ role, ...rest }) {
    if (role !== 'admin') return null

    return <Control {...rest} />
  }
}
