import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { RevokePortalMember } from './RevokePortalMember'

export function PortalMemberRow({ member }) {
  const name = member.name || '—'
  const email = member.email || '—'

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{member.status}</Td>
      <Td>
        <RevokePortalMember contactId={member.contactId}
          status={member.status} />
      </Td>
    </Tr>
  )
}
