'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { listInvoices } from '@/lib/invoice/controllers/listInvoices'

export async function listInvoicesAction() {
  const member = await currentMembership()

  if (!member) return []

  return listInvoices(member.organizationId)
}
