'use server'

import { withMember } from '@/lib/auth/withMember'
import { sumPurchasesByBucket }
  from '@/lib/purchase/controllers/sumPurchasesByBucket'

export const sumPurchasesByBucketAction = withMember(
  (window, grain) => sumPurchasesByBucket(window, grain),
  []
)
