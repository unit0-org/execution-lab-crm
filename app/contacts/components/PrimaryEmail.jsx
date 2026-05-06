function pickPrimary(emails = []) {
  return emails.find((e) => e.is_primary)?.email || emails[0]?.email || ''
}

export function PrimaryEmail({ emails }) {
  return <>{pickPrimary(emails)}</>
}
