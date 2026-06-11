import { Link } from '@/ui/atoms/Link'
import { Text } from '@/ui/atoms/Text'

// Link out to the registrant's full CRM contact page, or a muted note when
// they aren't linked to a contact yet.
export function RegistrantCrmLink({ contactId }) {
  if (!contactId) {
    return <Text tone="muted">Not linked to a CRM contact yet.</Text>
  }

  return <Link href={`/contacts/${contactId}`}>View full CRM page →</Link>
}
