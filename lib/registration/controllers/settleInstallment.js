// Record that an installment is paid. The charge id is what makes it
// settled — `scope('settled')` reads it, and the seat's paid total picks
// the charge up through the same id (chargesForRegistration).
export async function settleInstallment(installment, charge) {
  await installment.update({
    stripe_payment_intent_id: charge.intentId,
    stripe_charge_id: charge.chargeId,
    last_attempt_at: new Date(),
    last_failure: null
  })
}
