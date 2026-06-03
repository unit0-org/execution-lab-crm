import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { ResourceLink } from './ResourceLink'

export function MeetingResources({ resources }) {
  if (!resources.length) return null

  return (
    <Stack gap="sm">
      <Heading level={3}>Notes &amp; recordings</Heading>
      {resources.map((resource) => (
        <ResourceLink key={resource.id} resource={resource} />
      ))}
    </Stack>
  )
}
