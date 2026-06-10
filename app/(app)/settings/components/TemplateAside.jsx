import { Stack } from '@/ui/layout/Stack'
import { TemplatePreview } from './TemplatePreview'
import { TemplateVariables } from './TemplateVariables'

export function TemplateAside({ body, templateKey }) {
  return (
    <Stack gap="md">
      <TemplatePreview body={body} />
      <TemplateVariables templateKey={templateKey} />
    </Stack>
  )
}
