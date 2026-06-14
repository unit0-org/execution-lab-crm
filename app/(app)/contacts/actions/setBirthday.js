'use server'

import { setBirthday } from '@/lib/contact/controllers/setBirthday'
import { withOrg } from '@/lib/auth/withOrg'

const toNumber = (value) => {
  const raw = (value || '').trim()

  if (!raw) return null

  return Number(raw)
}

export const setBirthdayAction = withOrg(
  async (organizationId, formData) => {
    const id = formData.get('id')
    const parts = {
      birth_day: toNumber(formData.get('birth_day')),
      birth_month: toNumber(formData.get('birth_month')),
      birth_year: toNumber(formData.get('birth_year'))
    }

    return setBirthday(organizationId, id, parts)
  }
)
