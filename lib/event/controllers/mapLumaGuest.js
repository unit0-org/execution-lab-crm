import { parseAmountCents } from './money'
import { statusStamps } from './lumaStatus'

// Map one raw Luma CSV row to our shape. Columns we don't care about
// (qr_code_url, utm_source, amount_tax, eth_address, etc.) are dropped.
export function mapLumaGuest(row, eventDate) {
  return {
    first_name: row.first_name,
    last_name: row.last_name,
    email: row.email || null,
    phone: row.phone_number || null,
    participant: participant(row, eventDate)
  }
}

function participant(row, eventDate) {
  return {
    ticket_name: row.ticket_name || null,
    amount_paid_cents: parseAmountCents(row.amount),
    currency: row.currency || null,
    coupon_code: row.coupon_code || null,
    ...statusStamps(row, eventDate)
  }
}
