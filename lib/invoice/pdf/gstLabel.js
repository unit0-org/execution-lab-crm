// The tax row label, e.g. "GST (5%)".
export function gstLabel(invoice) {
  const pct = Math.round(Number(invoice.tax_rate || 0) * 100)

  return pct ? `GST (${pct}%)` : 'Tax'
}
