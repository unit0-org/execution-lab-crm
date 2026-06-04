'use server'

import { spendInsight } from '@/lib/purchase/controllers/spendInsight'

export async function contactSpendAction(contactId) {
  return spendInsight(contactId)
}
