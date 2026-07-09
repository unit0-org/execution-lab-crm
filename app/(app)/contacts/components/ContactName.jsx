import { contactLabel } from '@/lib/contact/controllers/contactLabel'

export function ContactName({ contact }) {
  return <>{contactLabel(contact)}</>
}
