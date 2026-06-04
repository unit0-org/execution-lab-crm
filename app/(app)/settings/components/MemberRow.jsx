import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { RoleToggle } from './RoleToggle'
import { RemoveMember } from './RemoveMember'

export function MemberRow({ member, onChanged }) {
  const who = member.email || 'Active member'

  return (
    <Inline gap="sm">
      <Text size="sm">{who}</Text>
      <Badge tone="neutral">{member.role}</Badge>
      <RoleToggle member={member} onChanged={onChanged} />
      <RemoveMember id={member.id} onChanged={onChanged} />
    </Inline>
  )
}
