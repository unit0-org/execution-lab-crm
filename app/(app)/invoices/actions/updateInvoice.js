'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { updateInvoice } from '@/lib/invoice/controllers/updateInvoice'
import { invoiceSaveError } from '@/lib/invoice/controllers/invoiceSaveError'

export const updateInvoiceAction = withOrg(
  async (_organizationId, id, data) => {
    try {
      const invoice = await updateInvoice(id, data)

      return { ok: true, id: invoice.id }
    } catch (e) {
      return { error: invoiceSaveError(e) }
    }
  }
)
