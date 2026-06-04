'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'

export async function syncPurchasesAction(force) {
  try {
    return await syncPurchases(force)
  } catch (e) {
    return { error: e.message }
  }
}
