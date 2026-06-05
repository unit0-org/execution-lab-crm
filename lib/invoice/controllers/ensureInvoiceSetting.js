import { InvoiceSetting } from '../models'

// The org's invoice settings row, created with defaults if missing.
export async function ensureInvoiceSetting(organizationId) {
  const [row] = await InvoiceSetting.findOrCreate({
    where: { organization_id: organizationId }
  })

  return row
}
