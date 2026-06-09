import { Inline } from '@/ui/layout/Inline'
import { Avatar } from '@/ui/atoms/Avatar'
import { ContactNameLink } from './ContactNameLink'
import { fullName } from './fullName'

// A list row's name cell: small avatar beside the linked name.
export function ContactNameCell({ contact }) {
  return (
    <Inline gap="sm" nowrap>
      <Avatar size={28} src={contact.photo_url} name={fullName(contact)} />
      <ContactNameLink contact={contact} />
    </Inline>
  )
}
