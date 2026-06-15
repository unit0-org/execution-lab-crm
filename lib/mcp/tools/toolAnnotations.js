// MCP annotation hints per tool, so Claude.ai's tool-permission UI can
// group CRM tools: read-only ones split into "Read-only"; everything
// else lands in "Interactive", with delete/merge/remove and invoice
// money ops flagged destructive so they default to requiring approval.

const isReadOnly = (name) =>
  /^(get|list|search)_/.test(name) ||
  name === 'contact_activity' ||
  name === 'dashboard_summary'

const FINANCIAL = new Set([
  'approve_invoice', 'send_invoice', 'send_invoices', 'void_invoice'
])

const isDestructive = (name) =>
  /^(delete|merge|remove)_/.test(name) || FINANCIAL.has(name)

export function toolAnnotations(name) {
  if (isReadOnly(name)) return { readOnlyHint: true }

  return { destructiveHint: isDestructive(name) }
}
