import { BarChart } from '@/ui/molecules/BarChart'
import { ChartSkeleton } from '@/ui/molecules/ChartSkeleton'

// A sized skeleton while loading, otherwise the chart (no layout shift).
export function ChartBody({ loading, data }) {
  if (loading) return <ChartSkeleton />

  return <BarChart data={data} />
}
