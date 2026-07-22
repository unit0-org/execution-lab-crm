'use server'

import { withMember } from '@/lib/auth/withMember'
import { companyInvoices } from '@/lib/invoice/controllers/companyInvoices'

export const companyInvoicesAction = withMember(
  (companyId) => companyInvoices(companyId),
  []
)
