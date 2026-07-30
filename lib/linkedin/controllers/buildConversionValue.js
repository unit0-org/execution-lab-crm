// What one registration is worth to the campaign: exactly what that
// person paid, so a tiered event reports each buyer at their own tier and
// a free event reports zero. Never stored anywhere — money lives once, on
// the registration. Amounts are CAD, like everywhere else in the CRM.
export function buildConversionValue(registrant) {
  const cents = registrant.amountPaidCents || 0

  return { currencyCode: 'CAD', amount: (cents / 100).toFixed(2) }
}
