import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// Build the label/value fact list for a paid registration, dropping
// any pair whose value is empty.
export function registrationFacts(registration, cohort) {
  const amount = formatMoney(registration.amount_total, 'cad')
  const pairs = [
    { label: 'Company', value: registration.company },
    { label: 'Role', value: registration.role },
    { label: 'Cohort', value: cohort?.label },
    { label: 'Cohort start', value: cohort?.start_date },
    { label: 'Amount paid', value: amount },
    { label: 'Promo code', value: registration.promo_code },
    { label: 'How did you hear about us', value: registration.referral_source }
  ]

  return pairs.filter((pair) => pair.value)
}
