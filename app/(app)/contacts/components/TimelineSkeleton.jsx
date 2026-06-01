import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

const ROWS = [0, 1]

export function TimelineSkeleton() {
  return (
    <Stack gap="sm">
      {ROWS.map((i) => <Skeleton key={i} height={20} />)}
    </Stack>
  )
}
