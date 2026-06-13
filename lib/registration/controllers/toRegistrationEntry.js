import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

const PAID = 'paid'

// A cohort registration shaped as a contact-activity entry.
export function toRegistrationEntry(registration) {
  const isPaid = registration.status === PAID
  const money = formatMoney(registration.amount_total, registration.currency)

  return {
    id: `r:${registration.id}`,
    kind: 'registration',
    href: `/cohorts/${registration.cohort_id}`,
    title: registration.cohort?.label || 'Cohort registration',
    date: registration.created_at,
    status: isPaid ? `Enrolled · ${money}` : 'Registered',
    statusTone: isPaid ? 'success' : 'warning'
  }
}
