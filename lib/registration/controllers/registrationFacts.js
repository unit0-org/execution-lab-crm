import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// Build the label/value fact list for a paid registration, dropping
// any pair whose value is empty.
export function registrationFacts(registration, cohort) {
  const amount = formatMoney(registration.amount_total, 'cad')
  const pairs = [
    { label: 'Preferred name', value: registration.preferred_name },
    { label: 'LinkedIn', value: registration.linkedin },
    { label: 'Website', value: registration.website },
    { label: 'Business', value: registration.business },
    { label: 'Stage', value: registration.stage },
    { label: 'Biggest obstacle', value: registration.obstacle },
    { label: 'Commitment', value: registration.commitment },
    { label: 'Cohort', value: cohort?.label },
    { label: 'Cohort start', value: cohort?.start_date },
    { label: 'Amount paid', value: amount },
    { label: 'Promo code', value: registration.promo_code }
  ]

  return pairs.filter((pair) => pair.value)
}
