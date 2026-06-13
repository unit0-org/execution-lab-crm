'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { MembersTable } from './MembersTable'
import { InviteModal } from './InviteModal'

export function SettingsView({ members, organizationId }) {
  const router = useRouter()
  const modal = useToggle()
  const reload = () => router.refresh()
  const onInvited = () => { reload(); modal.hide() }

  return (
    <Stack gap="md">
      <SectionHeader title="Members" addLabel="Invite member"
        onAdd={modal.show} />
      <MembersTable members={members} onChanged={reload} />
      <InviteModal open={modal.open} onClose={modal.hide}
        organizationId={organizationId} onInvited={onInvited} />
    </Stack>
  )
}
