import { parseAmountCents } from '@/lib/invoice/controllers/parseAmountCents'

const lineReady = (line) =>
  !!line.description.trim() && parseAmountCents(line.unitAmount) > 0

// The Save button is enabled only once every required field is filled.
export function isInvoiceValid(fields, lines) {
  const hasNumber = !!fields.number.trim()
  const hasClient = !!fields.client.name.trim()
  const hasDates = !!fields.issuedAt && !!fields.dueAt

  return hasNumber && hasClient && hasDates && lines.length > 0
    && lines.every(lineReady)
}
