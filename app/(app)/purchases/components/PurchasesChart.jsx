'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { ChartBody } from './ChartBody'
import { GrainSelect } from './GrainSelect'
import { toChartData } from './toChartData'
import { useGrain } from '../hooks/useGrain'
import { usePurchaseTotals } from '../hooks/usePurchaseTotals'

// Total spend over the active window, re-bucketed by the chosen grain.
export function PurchasesChart({ window }) {
  const { grain, setGrain } = useGrain()
  const { buckets, loading } = usePurchaseTotals(window, grain)

  return (
    <Card>
      <Collapsible title="Spend" defaultOpen={false}>
        <Stack gap="sm">
          <GrainSelect value={grain} onChange={setGrain} />
          <ChartBody loading={loading} data={toChartData(buckets)} />
        </Stack>
      </Collapsible>
    </Card>
  )
}
