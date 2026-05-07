function MissingAccount() { return <>—</> }

export function AccountEmail({ email }) {
  if (!email) return <MissingAccount />
  return <>{email}</>
}
