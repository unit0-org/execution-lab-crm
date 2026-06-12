'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { backfillDraftInvoices }
  from '@/lib/invoice/controllers/backfillDraftInvoices'

export const backfillInvoicesAction = withOrg(
  (organizationId) => backfillDraftInvoices(organizationId)
)
