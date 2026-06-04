'use server'

import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'
import { orgStripeKey } from '@/lib/purchase/controllers/orgStripeKey'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function syncPurchasesAction(force) {
  try {
    const member = await currentMembership()
    const key = member ? await orgStripeKey(member.organizationId) : null

    return await syncPurchases(force, key)
  } catch (e) {
    return { error: e.message }
  }
}
