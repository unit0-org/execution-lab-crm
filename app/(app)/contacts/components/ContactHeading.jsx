import { Avatar } from '@/ui/atoms/Avatar'
import { Heading } from '@/ui/atoms/Heading'
import { ContactName } from './ContactName'
import { fullName } from './fullName'

// The detail header's identity: profile avatar beside the name heading.
export function ContactHeading({ contact }) {
  return (
    <>
      <Avatar src={contact.photo_url} name={fullName(contact)} />
      <Heading gutter="none"><ContactName contact={contact} /></Heading>
    </>
  )
}
