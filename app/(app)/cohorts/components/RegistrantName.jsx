import { Link } from '@/ui/atoms/Link'

// The registrant's name, linked to their contact when one exists.
export function RegistrantName({ registration }) {
  const name = `${registration.first_name} ${registration.last_name}`

  if (!registration.contact_id) return name

  return <Link href={`/contacts/${registration.contact_id}`}>{name}</Link>
}
