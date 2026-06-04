// Purchases sync status text, mirroring the meetings sync control.
export function syncLabel({ syncing, error, result }) {
  if (syncing) return 'Syncing…'

  if (error) return 'Sync failed'

  if (result) return `Synced ${result.imported}`

  return 'Sync from Stripe'
}
