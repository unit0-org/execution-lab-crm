import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PreviewBody } from './PreviewBody'

export function InvoiceEmailPreview({ preview }) {
  const to = preview.to || 'No recipient email'

  return (
    <Card>
      <Stack gap="xs">
        <MonoLabel>{preview.number} → {to}</MonoLabel>
        <PreviewBody preview={preview} />
      </Stack>
    </Card>
  )
}
