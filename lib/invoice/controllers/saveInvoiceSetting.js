import { ensureInvoiceSetting } from './ensureInvoiceSetting'

// Update an organization's invoicing configuration.
export async function saveInvoiceSetting(organizationId, data) {
  const row = await ensureInvoiceSetting(organizationId)

  await row.update(data)

  return row.toJSON()
}
