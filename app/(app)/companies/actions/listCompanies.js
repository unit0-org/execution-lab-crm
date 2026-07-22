'use server'

import { withMember } from '@/lib/auth/withMember'
import { listCompanies } from '@/lib/company/controllers/listCompanies'

export const listCompaniesAction = withMember(() => listCompanies(), [])
