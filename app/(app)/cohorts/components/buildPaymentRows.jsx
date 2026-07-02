import { DateText } from '@/ui/atoms/DateText'
import { formatDollars } from '@/lib/portal/formatDollars'
import { PaymentStatus } from './PaymentStatus'

// Label/value rows for a registrant's payment, dropping the empty ones.
export function buildPaymentRows(registration) {
  const r = registration
  const amount = r.amount_total ? formatDollars(r.amount_total) : null
  const discount = r.discount_total ? formatDollars(r.discount_total) : null
  const paid = r.paid_at ? <DateText value={r.paid_at} /> : null

  const rows = [
    { label: 'Status', value: <PaymentStatus registration={r} /> },
    { label: 'Amount', value: amount },
    { label: 'Discount', value: discount },
    { label: 'Promo code', value: r.promo_code },
    { label: 'Registered', value: <DateText value={r.created_at} /> },
    { label: 'Paid', value: paid }
  ]

  return rows.filter((row) => row.value)
}
