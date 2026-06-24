import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MemberResourceItem } from './MemberResourceItem'

export function MemberKind({ title, items }) {
  if (!items.length) return null

  return (
    <Stack gap="xs">
      <MonoLabel size={11} tone="muted">{title}</MonoLabel>
      {items.map((item) => (
        <MemberResourceItem key={item.id} item={item} />
      ))}
    </Stack>
  )
}
