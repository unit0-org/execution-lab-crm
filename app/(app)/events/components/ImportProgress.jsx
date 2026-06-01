'use client'

import { useFormStatus } from 'react-dom'
import { ProgressBar } from '@/ui/atoms/ProgressBar'
import { Text } from '@/ui/atoms/Text'
import { Stack } from '@/ui/layout/Stack'
import { useImportStages } from '../hooks/useImportStages'

export function ImportProgress() {
  const { pending } = useFormStatus()
  const stage = useImportStages(pending)

  if (!pending) return null

  return (
    <Stack gap="sm">
      <ProgressBar />
      <Text size="sm" tone="muted">{stage}</Text>
    </Stack>
  )
}
