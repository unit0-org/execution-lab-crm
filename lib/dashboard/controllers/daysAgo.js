// A Date the given number of days before now.
export function daysAgo(n) {
  return new Date(Date.now() - n * 86400000)
}
