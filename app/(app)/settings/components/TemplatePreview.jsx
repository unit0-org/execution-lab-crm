import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Card } from '@/ui/atoms/Card'
import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { textToHtml } from '@/lib/email/controllers/textToHtml'
import { SAMPLE_VARS } from '@/lib/email/sampleVars'

// Shows the email exactly as it sends: {{vars}} filled from sample data,
// then the plain-text body turned into paragraphs. The only place we use
// dangerouslySetInnerHTML — the content is trusted (admin-only).
export function TemplatePreview({ body }) {
  const html = { __html: textToHtml(renderTemplate(body, SAMPLE_VARS)) }

  return (
    <Stack gap="xs">
      <Heading level={3}>Preview</Heading>
      <Card>
        <div dangerouslySetInnerHTML={html} />
      </Card>
    </Stack>
  )
}
