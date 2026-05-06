// Build a lookup of account_id → account so contact rows can resolve
// their source account email without an extra round-trip.
export function useAccountIndex(accounts) {
  return Object.fromEntries(accounts.map((a) => [a.id, a]))
}
