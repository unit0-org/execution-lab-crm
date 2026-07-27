const OFF_SESSION = {
  customer_creation: 'always',
  payment_intent_data: { setup_future_usage: 'off_session' }
}

// Keep the card on file so we can charge the plan's second half without the
// buyer present. The terms are disclosed on the registration form before
// they pay — Stripe requires that consent for a later off-session charge.
export function savedCardTerms(savesCard) {
  if (!savesCard) return {}

  return OFF_SESSION
}
