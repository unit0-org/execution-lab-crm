'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { sumPurchasesByBucket }
  from '@/lib/purchase/controllers/sumPurchasesByBucket'

export async function sumPurchasesByBucketAction(window, grain) {
  const member = await currentMembership()

  if (!member) return []

  return sumPurchasesByBucket(member.organizationId, window, grain)
}
