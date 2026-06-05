import { ensureInvoiceSetting } from './ensureInvoiceSetting'

// An organization's invoicing configuration, as a plain object.
export async function getInvoiceSetting(organizationId) {
  const row = await ensureInvoiceSetting(organizationId)

  return row.toJSON()
}
