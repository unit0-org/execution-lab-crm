import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// Shape spend buckets into BarChart data, with CAD value labels.
export function toChartData(buckets) {
  return buckets.map((bucket) => ({
    label: bucket.bucket,
    value: bucket.totalCents,
    valueLabel: formatMoney(bucket.totalCents, 'cad')
  }))
}
