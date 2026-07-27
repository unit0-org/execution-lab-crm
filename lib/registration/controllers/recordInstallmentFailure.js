// Record a refused attempt: what went wrong and how many times we've
// tried. No charge id, so the row stays unsettled and the next daily run
// picks it up again — until the attempt cap stops it.
export async function recordInstallmentFailure(installment, message) {
  await installment.update({
    attempt_count: installment.attempt_count + 1,
    last_attempt_at: new Date(),
    last_failure: message
  })
}
