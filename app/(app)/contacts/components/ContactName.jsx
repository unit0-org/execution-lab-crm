const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const label = (c) =>
  fullName(c) || c.contact_email?.[0]?.email || 'Unnamed contact'

export function ContactName({ contact }) {
  return <>{label(contact)}</>
}
