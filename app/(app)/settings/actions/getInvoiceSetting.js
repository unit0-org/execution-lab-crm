'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getInvoiceSetting } from '@/lib/invoice/controllers/getInvoiceSetting'

export const getInvoiceSettingAction = withOrg(
  (organizationId) => getInvoiceSetting(organizationId),
  null
)
