'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { Button } from '@/ui/atoms/Button'
import { acceptLabel } from './acceptLabel'

// Warns when the chosen cohort is full, then accepts anyway on confirm.
function FullWarning({ full }) {
  if (!full) return null

  return (
    <Text tone="danger" size="sm">
      This cohort is full — accepting will overfill it.
    </Text>
  )
}

// The accept action, with an overfill warning when the cohort is full.
export function AcceptButton({ full, onAccept }) {
  return (
    <Stack gap="xs">
      <FullWarning full={full} />
      <Button tone="primary" size="sm" onClick={onAccept}>
        {acceptLabel(full)}
      </Button>
    </Stack>
  )
}
