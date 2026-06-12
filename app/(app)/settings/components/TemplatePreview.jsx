import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Card } from '@/ui/atoms/Card'
import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { SAMPLE_VARS } from '@/lib/email/sampleVars'

// Renders admin-authored template HTML for preview, with {{vars}} filled
// in from sample data so it reads like a real email. The only place we
// use dangerouslySetInnerHTML — the content is trusted (admin-only).
export function TemplatePreview({ body }) {
  const html = { __html: renderTemplate(body, SAMPLE_VARS) }

  return (
    <Stack gap="xs">
      <Heading level={3}>Preview</Heading>
      <Card>
        <div dangerouslySetInnerHTML={html} />
      </Card>
    </Stack>
  )
}
