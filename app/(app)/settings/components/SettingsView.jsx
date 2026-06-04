'use client'

import { Stack } from '@/ui/layout/Stack'
import { useMembership } from '../../hooks/useMembership'
import { useMembers } from '../hooks/useMembers'
import { MemberRow } from './MemberRow'
import { AddMember } from './AddMember'

export function SettingsView() {
  const membership = useMembership()
  const orgId = membership?.organizationId
  const { members, reload } = useMembers(orgId)

  return (
    <Stack gap="sm">
      {members.map((member) => (
        <MemberRow key={member.id} member={member} onChanged={reload} />
      ))}
      <AddMember organizationId={orgId} onChanged={reload} />
    </Stack>
  )
}
