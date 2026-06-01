import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

// Mirrors EventDetail's layout so the swap to real content doesn't shift.
const BLOCKS = [34, 72, 64, 200]

export function EventLoading() {
  return (
    <Stack gap="lg">
      {BLOCKS.map((h, i) => <Skeleton key={i} height={h} />)}
    </Stack>
  )
}
