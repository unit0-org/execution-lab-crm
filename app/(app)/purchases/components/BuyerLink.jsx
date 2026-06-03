import { Link } from '@/ui/atoms/Link'

export function BuyerLink({ name, contactId }) {
  if (!contactId) return name

  return <Link href={`/contacts/${contactId}`}>{name}</Link>
}
