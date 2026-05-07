import Link from 'next/link'
import { IdentityChip } from '@/ui/IdentityChip'
import { SidebarSyncButton } from './SidebarSyncButton'
import { sidebarRowStyle, chipLinkStyle } from './AccountChip.styles'

export function AccountChip({ id, email, onMutate }) {
  return (
    <div style={sidebarRowStyle}>
      <Link href={`/contacts?account=${id}`} style={chipLinkStyle}>
        <IdentityChip label={email} interactive />
      </Link>
      <SidebarSyncButton accountId={id} onMutate={onMutate} />
    </div>
  )
}
