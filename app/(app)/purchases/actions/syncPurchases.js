'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { withMember } from '@/lib/auth/withMember'

export const syncPurchasesAction = withMember(async (force) => {
  try {
    return await syncPurchases(force, stripeApiKey())
  } catch (e) {
    return { error: e.message }
  }
})
