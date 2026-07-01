import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'
import { MemberFolderHeader } from './MemberFolderHeader'
import { MemberKind } from './MemberKind'

const ofKind = (items, kind) => items.filter((i) => i.kind === kind)

export function MemberFolder({ folder }) {
  return (
    <Card>
      <Stack gap="sm">
        <MemberFolderHeader name={folder.name} />
        {RESOURCE_KINDS.map((k) => (
          <MemberKind key={k.kind} title={k.title}
            items={ofKind(folder.resource, k.kind)} />
        ))}
      </Stack>
    </Card>
  )
}
