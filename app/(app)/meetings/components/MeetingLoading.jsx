import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

// Mirrors MeetingDetail's layout so the swap to real content doesn't shift.
const BLOCKS = [34, 64, 56, 56]

export function MeetingLoading() {
  return (
    <Stack gap="lg">
      {BLOCKS.map((h, i) => <Skeleton key={i} height={h} />)}
    </Stack>
  )
}
