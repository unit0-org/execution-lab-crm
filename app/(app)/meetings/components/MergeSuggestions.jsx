'use client'

import { Stack } from '@/ui/layout/Stack'
import { MergeSuggestionCard } from './MergeSuggestionCard'

export function MergeSuggestions({ suggestions, onChanged }) {
  if (!suggestions.length) return null

  return (
    <Stack gap="sm">
      {suggestions.map((suggestion) => (
        <MergeSuggestionCard key={suggestion.id} suggestion={suggestion}
          onChanged={onChanged} />
      ))}
    </Stack>
  )
}
