import { AppLink } from '@/ui/AppLink'
import { ContactName } from './ContactName'

export function ContactNameLink({ contact }) {
  return (
    <AppLink href={`/contacts/${contact.id}`}>
      <ContactName name={contact.display_name} />
    </AppLink>
  )
}
