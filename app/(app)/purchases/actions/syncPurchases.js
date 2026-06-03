'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'

export async function syncPurchasesAction() {
  try {
    return await syncPurchases()
  } catch (e) {
    return { error: e.message }
  }
}
