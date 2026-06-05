'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { saveCompanyProfile }
  from '@/lib/company/controllers/saveCompanyProfile'
import { formToCompany } from './formToCompany'

export async function saveCompanyAction(formData) {
  const member = await currentMembership()

  if (member?.role !== 'admin') return { error: 'Forbidden' }

  try {
    await saveCompanyProfile(member.organizationId, formToCompany(formData))

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
}
