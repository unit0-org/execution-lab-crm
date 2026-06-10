import { Text } from '@/ui/atoms/Text'

// Scarcity nudge: only shown when 1–3 seats remain (Story 2.1).
export function CohortAvailability({ spotsLeft }) {
  if (spotsLeft < 1) return null

  if (spotsLeft > 3) return null

  return <Text tone="danger" size="sm">Only {spotsLeft} spots left</Text>
}
