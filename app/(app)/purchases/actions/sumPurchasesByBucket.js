'use server'

import { sumPurchasesByBucket }
  from '@/lib/purchase/controllers/sumPurchasesByBucket'

export async function sumPurchasesByBucketAction(window, grain) {
  return sumPurchasesByBucket(window, grain)
}
