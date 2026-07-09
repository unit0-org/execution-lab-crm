import { contactLabel } from './contactLabel'

export function ContactName({ contact }) {
  return <>{contactLabel(contact)}</>
}
