import { sendBalanceFailed } from './sendBalanceFailed'

const FIRST_FAILURE = 1

// Email on the first refusal only — the later retries are ours to make
// quietly, not four copies of the same bad news. Best-effort: a flaky send
// must not stop the rest of the batch.
export async function trySendBalanceFailed(installment, registration, cohort) {
  if (installment.attempt_count !== FIRST_FAILURE) return

  try {
    await sendBalanceFailed(installment, registration, cohort)
  } catch (e) {
    console.error(`balance email failed for ${installment.id}: ${e.message}`)
  }
}
