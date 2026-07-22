'use server'

import { withMember } from '@/lib/auth/withMember'
import { getCompany } from '@/lib/company/controllers/getCompany'

export const getCompanyAction = withMember((id) => getCompany(id), null)
