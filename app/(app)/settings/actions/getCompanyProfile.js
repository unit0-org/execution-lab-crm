'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { getCompanyProfile } from '@/lib/company/controllers/getCompanyProfile'

export async function getCompanyProfileAction() {
  const member = await currentMembership()

  if (!member) return null

  return getCompanyProfile(member.organizationId)
}
