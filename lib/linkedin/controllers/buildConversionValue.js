// What one registration is worth to the campaign. The event's override
// wins; otherwise a conversion is worth exactly what that person paid, so
// a tiered event reports each buyer at their own tier and a free event
// reports zero. Amounts are CAD, like everywhere else in the CRM.
export function buildConversionValue(rule, registrant) {
  const cents = rule.valueCents ?? registrant.amountPaidCents ?? 0

  return { currencyCode: 'CAD', amount: (cents / 100).toFixed(2) }
}
