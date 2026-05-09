'use client'

import Link from 'next/link'
import { Stack } from '@/ui/Stack'
import { IdentityChip } from '@/ui/IdentityChip'
import { SidebarSyncButton } from './SidebarSyncButton'
import { SyncProgressLine } from './SyncProgressLine'
import { useSyncProgress } from '../contacts/hooks/useSyncProgress'
import { useSyncToastOnFinish } from '../contacts/hooks/useSyncToastOnFinish'
import { sidebarRowStyle, chipLinkStyle } from './AccountChip.styles'

export function AccountChip({ id, email, onMutate }) {
  const progress = useSyncProgress(id)
  useSyncToastOnFinish(progress, onMutate)
  const running = progress?.sync_status === 'running'

  return (
    <Stack gap="xs">
      <div style={sidebarRowStyle}>
        <Link href={`/contacts?account=${id}`} style={chipLinkStyle}>
          <IdentityChip label={email} interactive />
        </Link>
        <SidebarSyncButton accountId={id} forceSpinning={running} />
      </div>
      {running ? <SyncProgressLine progress={progress} /> : null}
    </Stack>
  )
}
