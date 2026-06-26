import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// A member-facing tool tile: name, blurb and an "Open" link to the tool.
export function ToolCard({ tool }) {
  return (
    <Card>
      <Stack gap="sm">
        <Heading level={3} gutter="none">{tool.name}</Heading>
        <Text size="sm" tone="muted" gutter="none">{tool.blurb}</Text>
        <ButtonLink href={portalRoutePath(tool.path)} tone="primary">
          Open
        </ButtonLink>
      </Stack>
    </Card>
  )
}
