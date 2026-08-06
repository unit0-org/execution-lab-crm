'use client'

import { Stack } from '@/ui/layout/Stack'
import { ProgressBar } from '@/ui/atoms/ProgressBar'
import { Text } from '@/ui/atoms/Text'
import { sendProgressLabel } from '../hooks/sendProgressLabel'

// How far the batch has got, in pairs. The track sits there empty from the
// moment the dialog opens, so pressing Send fills it rather than growing a
// new row and pushing the buttons down. A single invoice needs no count.
export function SendProgress({ done, total }) {
  if (total < 2) return null

  return (
    <Stack gap="sm">
      <ProgressBar value={done} total={total} />
      <Text size="sm" tone="muted">{sendProgressLabel(done, total)}</Text>
    </Stack>
  )
}
