import { bucketOf } from './bucketOf'

// Add a purchase's amount into its time bucket within the totals map.
export function addToBuckets(totals, purchase, grain) {
  const at = new Date(purchase.purchased_at)
  const { key, label } = bucketOf(at, grain)
  const prev = totals.get(key) || { label, totalCents: 0 }
  const totalCents = prev.totalCents + purchase.amount_cents

  totals.set(key, { label, totalCents })
}

// The buckets as chart rows [{ bucket, totalCents }], oldest first.
export function toBucketRows(totals) {
  const keys = [...totals.keys()].sort()

  return keys.map((key) => {
    const entry = totals.get(key)

    return { bucket: entry.label, totalCents: entry.totalCents }
  })
}
