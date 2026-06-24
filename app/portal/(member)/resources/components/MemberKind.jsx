import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'

export function MemberKind({ title, items }) {
  if (!items.length) return null

  return (
    <Stack gap="xs">
      <MonoLabel size={11} tone="muted">{title}</MonoLabel>
      {items.map((item) => (
        <MonoLink key={item.id} href={item.url} size={13}>
          {item.title}
        </MonoLink>
      ))}
    </Stack>
  )
}
