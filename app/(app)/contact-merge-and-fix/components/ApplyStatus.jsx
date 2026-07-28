import { Text } from '@/ui/atoms/Text'

// The line under the plan: the warning while it can still be cancelled, and
// the count once it is running — a merge apiece takes seconds, so a batch
// has to keep saying where it is.
export function ApplyStatus({ busy, done, total }) {
  if (!busy) return <Text size="sm">Merging cannot be undone.</Text>

  return <Text size="sm">Applying… {done} of {total} done.</Text>
}
