import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'
import { ResourceKind } from './ResourceKind'

const ofKind = (items, kind) => items.filter((i) => i.kind === kind)

export function FolderResources({ resources, cohortId, onChanged }) {
  if (!resources.length)
    return <Text size="sm">No resources in this folder yet.</Text>

  return (
    <Stack gap="sm">
      {RESOURCE_KINDS.map((k) => (
        <ResourceKind key={k.kind} title={k.title} cohortId={cohortId}
          items={ofKind(resources, k.kind)} onChanged={onChanged} />
      ))}
    </Stack>
  )
}
