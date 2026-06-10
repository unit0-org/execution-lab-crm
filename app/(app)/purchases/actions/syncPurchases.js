'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function syncPurchasesAction(force) {
  try {
    const member = await currentMembership()
    const org = member?.organizationId

    return await syncPurchases(force, stripeApiKey(), org)
  } catch (e) {
    return { error: e.message }
  }
}
