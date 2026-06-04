import { Skeleton } from '../atoms/Skeleton'
import { CHART_HEIGHT, CHART_FOOTER } from './chartDims'

// Placeholder sized to the real chart so loading causes no layout shift.
export function ChartSkeleton() {
  return <Skeleton height={CHART_HEIGHT + CHART_FOOTER} />
}
