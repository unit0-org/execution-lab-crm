// A per-run cap on outbound Google writes so a single sync can never run
// long enough to time out. take() consumes one unit (false when spent);
// exhausted() means work remains for the next run.
export function writeBudget(max = 50) {
  let left = max

  const take = () => {
    if (left <= 0) return false

    left -= 1

    return true
  }

  return { take, exhausted: () => left <= 0 }
}
