import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Badge } from '@/ui/atoms/Badge'
import { Inline } from '@/ui/layout/Inline'
import { RoleToggle } from './RoleToggle'
import { RemoveMember } from './RemoveMember'

export function MemberRow({ member, onChanged }) {
  const who = member.display_name || member.email || 'Active member'

  return (
    <Tr>
      <Td>{who}</Td>
      <Td><Badge tone="neutral">{member.role}</Badge></Td>
      <Td>
        <Inline gap="sm">
          <RoleToggle member={member} onChanged={onChanged} />
          <RemoveMember id={member.id} onChanged={onChanged} />
        </Inline>
      </Td>
    </Tr>
  )
}
