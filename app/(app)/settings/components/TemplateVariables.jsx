import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Badge } from '@/ui/atoms/Badge'
import { TEMPLATE_VARIABLES } from '@/lib/email/templateVariables'

export function TemplateVariables({ templateKey }) {
  const vars = TEMPLATE_VARIABLES[templateKey] || []

  return (
    <Stack gap="xs">
      <Heading level={3}>Variables</Heading>
      <Inline gap="xs">
        {vars.map((name) => (
          <Badge key={name}>{`{{${name}}}`}</Badge>
        ))}
      </Inline>
    </Stack>
  )
}
