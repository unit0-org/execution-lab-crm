import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { groupResources } from '../hooks/groupResources'
import { ResourceSession } from './ResourceSession'

export function ResourceList({ resources, onChanged }) {
  if (!resources.length)
    return <Text size="sm">No resources yet.</Text>

  return (
    <Stack gap="md">
      {groupResources(resources).map((session) => (
        <ResourceSession key={session.label} session={session}
          onChanged={onChanged} />
      ))}
    </Stack>
  )
}
