import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { DriveLink } from './DriveLink'
import { outcomeView } from './outcomeView'

// The live status of the upload: a working line, then the outcome badge,
// detail/error, and a link to the file on success.
export function UploadStatus({ running, result }) {
  if (running) return <Text size="sm">Uploading…</Text>

  if (!result) return null

  const v = outcomeView(result)

  return (
    <Stack gap="sm">
      <Badge tone={v.tone}>{v.label}</Badge>
      <Text size="sm" tone="muted">{v.detail}</Text>
      <DriveLink url={result.url} />
    </Stack>
  )
}
