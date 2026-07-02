import { sendPaymentInstructions } from './sendPaymentInstructions'

// Best-effort: emailing the pay link must never block opening checkout, so
// a provider failure is logged and swallowed rather than thrown.
export async function trySendPaymentInstructions(reg, cohort) {
  try {
    await sendPaymentInstructions(reg, cohort)
  } catch (e) {
    console.error(`payment instructions failed for ${reg.id}: ${e.message}`)
  }
}
