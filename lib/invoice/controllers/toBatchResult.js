// A batch's outcome from its individual results: how many went out, how many
// didn't, and the first failure's reason — the one the UI shows.
export function toBatchResult(results) {
  const failures = results.filter((r) => r && r.error)

  return {
    sent: results.length - failures.length,
    failed: failures.length,
    error: failures[0]?.error
  }
}
