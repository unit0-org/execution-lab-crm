import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Card } from '@/ui/atoms/Card'

// Renders admin-authored template HTML for preview. The only place we
// use dangerouslySetInnerHTML — the content is trusted (admin-only).
export function TemplatePreview({ body }) {
  const html = { __html: body || '' }

  return (
    <Stack gap="xs">
      <Heading level={3}>Preview</Heading>
      <Card>
        <div dangerouslySetInnerHTML={html} />
      </Card>
    </Stack>
  )
}
