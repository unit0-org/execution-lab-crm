import { fullName } from './fullName'

const label = (c) =>
  fullName(c) || c.contact_email?.[0]?.email || 'Unnamed contact'

export function ContactName({ contact }) {
  return <>{label(contact)}</>
}
