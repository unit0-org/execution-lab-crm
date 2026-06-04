import { Stack } from '@/ui/layout/Stack'
import { CardGrid } from '@/ui/layout/CardGrid'
import { Card } from '@/ui/atoms/Card'
import { Skeleton } from '@/ui/atoms/Skeleton'

const CARDS = [0, 1, 2, 3]
const ROWS = [0, 1, 2, 3, 4]

// Placeholder matching the loaded dashboard's shape (avoids layout shift).
export function DashboardSkeleton() {
  return (
    <Stack gap="lg">
      <CardGrid>
        {CARDS.map((i) => <Card key={i}><Skeleton height={40} /></Card>)}
      </CardGrid>
      <Stack gap="sm">
        {ROWS.map((i) => <Skeleton key={i} height={20} />)}
      </Stack>
    </Stack>
  )
}
