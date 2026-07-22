'use server'

import { withMember } from '@/lib/auth/withMember'
import { searchCompanies } from '@/lib/company/controllers/searchCompanies'

export const searchCompaniesAction = withMember(
  (query) => searchCompanies(query),
  []
)
