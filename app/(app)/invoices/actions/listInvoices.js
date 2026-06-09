'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listInvoices } from '@/lib/invoice/controllers/listInvoices'

export const listInvoicesAction = withOrg(
  (organizationId) => listInvoices(organizationId),
  []
)
