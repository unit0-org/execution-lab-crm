import Link from 'next/link'
import { IdentityChip } from '@/ui/IdentityChip'

export function AccountChip({ id, email }) {
  return (
    <Link href={`/contacts?account=${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <IdentityChip label={email} interactive />
    </Link>
  )
}
