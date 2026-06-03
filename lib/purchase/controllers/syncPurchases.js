import { listSucceededPayments } from '@/lib/stripe/listSucceededPayments'
import { importPayment } from './importPayment'

// Backfill every succeeded Stripe payment into purchases.
export async function syncPurchases() {
  const payments = await listSucceededPayments()
  let imported = 0

  for (const payment of payments) {
    const { skipped } = await importPayment(payment)

    if (!skipped) imported += 1
  }

  return { imported }
}
