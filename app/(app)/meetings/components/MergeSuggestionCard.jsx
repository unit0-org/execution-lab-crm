'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { useSuggestionActions } from '../hooks/useSuggestionActions'
import { SuggestionActions } from './SuggestionActions'

export function MergeSuggestionCard({ suggestion, onChanged }) {
  const { merge, dismiss } = useSuggestionActions(suggestion, onChanged)

  return (
    <Card>
      <Stack gap="sm">
        <Text size="sm">This may be the same as a synced meeting:</Text>
        <Text>Manual: {suggestion.manual.title}</Text>
        <Text>Google: {suggestion.google.title}</Text>
        <SuggestionActions onMerge={merge} onDismiss={dismiss} />
      </Stack>
    </Card>
  )
}
