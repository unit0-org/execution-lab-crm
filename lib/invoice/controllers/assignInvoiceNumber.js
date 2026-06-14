import { ensureInvoiceSetting } from './ensureInvoiceSetting'

// Reserve the next sequential invoice number for an organization.
export async function assignInvoiceNumber(organizationId) {
  const setting = await ensureInvoiceSetting(organizationId)

  return setting.reserveNextNumber()
}
