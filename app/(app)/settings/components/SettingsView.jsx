'use client'

import { Stack } from '@/ui/layout/Stack'
import { useMembership } from '../../hooks/useMembership'
import { useMembers } from '../hooks/useMembers'
import { MembersTable } from './MembersTable'
import { AddMember } from './AddMember'

export function SettingsView() {
  const membership = useMembership()
  const orgId = membership?.organizationId
  const { members, reload } = useMembers(orgId)

  return (
    <Stack gap="sm">
      <MembersTable members={members} onChanged={reload} />
      <AddMember organizationId={orgId} onChanged={reload} />
    </Stack>
  )
}
