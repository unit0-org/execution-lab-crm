'use server'

import { listPurchases } from '@/lib/purchase/controllers/listPurchases'
import { withOrg } from '@/lib/auth/withOrg'

export const listPurchasesAction = withOrg(
  (organizationId, window) => listPurchases(organizationId, window),
  []
)
