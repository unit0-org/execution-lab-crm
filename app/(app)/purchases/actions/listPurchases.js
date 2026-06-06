'use server'

import { listPurchases } from '@/lib/purchase/controllers/listPurchases'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listPurchasesAction(window) {
  const member = await currentMembership()

  if (!member) return []

  return listPurchases(member.organizationId, window)
}
