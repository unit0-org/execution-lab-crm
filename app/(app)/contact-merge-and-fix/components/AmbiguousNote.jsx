import { Text } from '@/ui/atoms/Text'

// Says why this group's checkbox is off: nobody but the person merging can
// decide which name the survivor keeps.
export function AmbiguousNote({ mergeable }) {
  if (mergeable) return null

  return (
    <Text size="sm" tone="muted">
      These names differ — merge this one from the review.
    </Text>
  )
}
