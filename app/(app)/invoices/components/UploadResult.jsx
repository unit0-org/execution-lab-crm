import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { UploadStatus } from './UploadStatus'

// The Upload-to-Drive modal body: the operation, then its live status.
export function UploadResult({ running, result }) {
  return (
    <Stack gap="sm">
      <Text size="sm" tone="muted">Operation: upload PDF to Google Drive</Text>
      <UploadStatus running={running} result={result} />
    </Stack>
  )
}
