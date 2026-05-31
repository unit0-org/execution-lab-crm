import { Stack } from '@/ui/layout/Stack'
import { Skeleton } from '@/ui/atoms/Skeleton'

export function Loading() {
  return (
    <Stack gap="md">
      <Skeleton height={28} />
      <Skeleton height={40} />
      <Skeleton height={40} />
    </Stack>
  )
}
