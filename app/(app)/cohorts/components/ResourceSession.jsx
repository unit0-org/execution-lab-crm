import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'
import { ResourceKind } from './ResourceKind'

const ofKind = (items, kind) => items.filter((i) => i.kind === kind)

export function ResourceSession({ session, onChanged }) {
  return (
    <Stack gap="sm">
      <MonoLabel size={11} caps>{session.label}</MonoLabel>
      {RESOURCE_KINDS.map((k) => (
        <ResourceKind key={k.kind} title={k.title} onChanged={onChanged}
          items={ofKind(session.items, k.kind)} />
      ))}
    </Stack>
  )
}
