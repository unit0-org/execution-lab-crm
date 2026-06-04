'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useMembership } from '../../hooks/useMembership'
import { useMembers } from '../hooks/useMembers'
import { MembersTable } from './MembersTable'
import { InviteModal } from './InviteModal'

export function SettingsView() {
  const membership = useMembership()
  const orgId = membership?.organizationId
  const { members, reload } = useMembers(orgId)
  const modal = useToggle()
  const onInvited = () => { reload(); modal.hide() }

  return (
    <Stack gap="md">
      <SectionHeader title="Members" addLabel="Invite member"
        onAdd={modal.show} />
      <MembersTable members={members} onChanged={reload} />
      <InviteModal open={modal.open} onClose={modal.hide}
        organizationId={orgId} onInvited={onInvited} />
    </Stack>
  )
}
