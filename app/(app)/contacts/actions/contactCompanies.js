'use server'

import { withMember } from '@/lib/auth/withMember'
import { contactCompanies } from '@/lib/company/controllers/contactCompanies'

export const contactCompaniesAction = withMember(
  (contactId) => contactCompanies(contactId),
  []
)
