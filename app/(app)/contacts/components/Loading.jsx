import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

// Mirrors ContactDetail's layout (heading + fields + emails + action) so the
// swap to real content does not shift.
const BLOCKS = [56, 56, 56]

export function Loading() {
  return (
    <Stack gap="lg">
      <Skeleton height={34} />
      {BLOCKS.map((h, i) => <Skeleton key={i} height={h} />)}
      <Skeleton height={32} />
    </Stack>
  )
}
