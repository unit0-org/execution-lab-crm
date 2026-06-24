import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'
import { MemberKind } from './MemberKind'

const ofKind = (items, kind) => items.filter((i) => i.kind === kind)

export function MemberSession({ session }) {
  return (
    <Stack gap="sm">
      <MonoLabel size={11} caps>{session.label}</MonoLabel>
      {RESOURCE_KINDS.map((k) => (
        <MemberKind key={k.kind} title={k.title}
          items={ofKind(session.items, k.kind)} />
      ))}
    </Stack>
  )
}
