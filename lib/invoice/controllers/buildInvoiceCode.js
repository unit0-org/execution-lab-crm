const pad = (n) => String(n).padStart(2, '0')

const timeCode = (d) =>
  `${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`

// INV-YYYYMMDD-HHMMSS from a YYYY-MM-DD day plus a time source.
export function buildInvoiceCode(day, now = new Date()) {
  const ymd = (day || '').replaceAll('-', '')

  return `INV-${ymd}-${timeCode(now)}`
}
