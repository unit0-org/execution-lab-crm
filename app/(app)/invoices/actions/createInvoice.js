'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { createInvoice } from '@/lib/invoice/controllers/createInvoice'
import { invoiceSaveError } from '@/lib/invoice/controllers/invoiceSaveError'

export const createInvoiceAction = withOrg(
  async (organizationId, data) => {
    try {
      const invoice = await createInvoice(organizationId, data)

      return { ok: true, id: invoice.id }
    } catch (e) {
      return { error: invoiceSaveError(e) }
    }
  }
)
