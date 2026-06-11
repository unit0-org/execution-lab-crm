import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

const ROWS = [0, 1]

// Placeholder rows for a contact list section while its data loads, so
// the section shows progress instead of an empty gap (no layout shift).
export function ListSkeleton() {
  return (
    <Stack gap="sm">
      {ROWS.map((i) => <Skeleton key={i} height={20} />)}
    </Stack>
  )
}
