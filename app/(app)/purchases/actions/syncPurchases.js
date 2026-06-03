'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'

export async function syncPurchasesAction() {
  return syncPurchases()
}
