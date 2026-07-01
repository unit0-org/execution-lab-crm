import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'
import { MemberFolderTitle } from './MemberFolderTitle'
import { MemberKind } from './MemberKind'

const ofKind = (items, kind) => items.filter((i) => i.kind === kind)

export function MemberFolder({ folder }) {
  return (
    <Card>
      <Collapsible defaultOpen={false}
        title={<MemberFolderTitle name={folder.name} />}>
        <Stack gap="md">
          {RESOURCE_KINDS.map((k) => (
            <MemberKind key={k.kind} title={k.title}
              items={ofKind(folder.resource, k.kind)} />
          ))}
        </Stack>
      </Collapsible>
    </Card>
  )
}
