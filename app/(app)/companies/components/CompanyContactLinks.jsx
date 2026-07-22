import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'
import { fullName } from '@/app/(app)/contacts/components/fullName'

// A company's contacts as name links, mirroring how the Contacts table
// lists a person's emails.
export function CompanyContactLinks({ contacts }) {
  if (!contacts?.length) return <Text tone="muted">—</Text>

  return (
    <Inline gap="sm">
      {contacts.map((c) => (
        <Link key={c.id} href={`/contacts/${c.id}`}>{fullName(c)}</Link>
      ))}
    </Inline>
  )
}
