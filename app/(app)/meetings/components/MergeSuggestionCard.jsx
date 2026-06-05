'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Button } from '@/ui/atoms/Button'
import { useSuggestionActions } from '../hooks/useSuggestionActions'

export function MergeSuggestionCard({ suggestion, onChanged }) {
  const { merge, dismiss } = useSuggestionActions(suggestion, onChanged)

  return (
    <Card>
      <Stack gap="sm">
        <Text size="sm">This may be the same as a synced meeting:</Text>
        <Text>Manual: {suggestion.manual.title}</Text>
        <Text>Google: {suggestion.google.title}</Text>
        <Inline gap="sm">
          <Button tone="primary" size="sm" onClick={merge}>Merge</Button>
          <Button size="sm" onClick={dismiss}>Dismiss</Button>
        </Inline>
      </Stack>
    </Card>
  )
}
