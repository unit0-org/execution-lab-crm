import { ensureInvoiceSetting } from './ensureInvoiceSetting'

const pad = (n) => String(n).padStart(4, '0')

// Reserve the next sequential invoice number for an organization.
export async function assignInvoiceNumber(organizationId) {
  const setting = await ensureInvoiceSetting(organizationId)
  const number = `${setting.number_prefix}${pad(setting.next_number)}`

  await setting.update({ next_number: setting.next_number + 1 })

  return number
}
