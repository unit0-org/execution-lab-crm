'use server'

import { listPurchases } from '@/lib/purchase/controllers/listPurchases'
import { withMember } from '@/lib/auth/withMember'

export const listPurchasesAction = withMember(
  (window) => listPurchases(window),
  []
)
