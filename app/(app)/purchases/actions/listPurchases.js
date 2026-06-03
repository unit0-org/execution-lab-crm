'use server'

import { listPurchases } from '@/lib/purchase/controllers/listPurchases'

export async function listPurchasesAction() {
  return listPurchases()
}
