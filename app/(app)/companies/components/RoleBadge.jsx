import { Badge } from '@/ui/atoms/Badge'

const LABEL = { owner: 'Owner', employee: 'Employee' }

// Owner/employee pill; owner is accented, employee neutral.
export function RoleBadge({ role }) {
  const tone = role === 'owner' ? 'accent' : 'neutral'

  return <Badge tone={tone}>{LABEL[role]}</Badge>
}
