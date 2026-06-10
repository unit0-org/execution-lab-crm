import { Link } from '@/ui/atoms/Link'
import { Text } from '@/ui/atoms/Text'

// Link to the registrant's contact, or a muted dash when not yet linked.
export function ContactLink({ contactId }) {
  if (!contactId) {
    return <Text tone="muted">—</Text>
  }

  return <Link href={`/contacts/${contactId}`}>View contact</Link>
}
