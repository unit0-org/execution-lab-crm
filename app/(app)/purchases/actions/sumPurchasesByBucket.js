'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { sumPurchasesByBucket }
  from '@/lib/purchase/controllers/sumPurchasesByBucket'

export const sumPurchasesByBucketAction = withOrg(
  (organizationId, window, grain) =>
    sumPurchasesByBucket(organizationId, window, grain),
  []
)
