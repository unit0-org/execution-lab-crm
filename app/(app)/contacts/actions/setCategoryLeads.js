'use server'

import { setCategoryLeads } from '@/lib/contacts/setCategoryLeads'

export async function setCategoryLeadsAction(id, includeInLeads) {
  return setCategoryLeads(id, includeInLeads)
}
