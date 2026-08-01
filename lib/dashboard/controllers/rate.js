// A whole-percent share of a total. A zero total reads as 0, never NaN —
// an empty period must render a dash-free 0%, not "NaN%".
export function rate(part, total) {
  if (!total) return 0

  return Math.round((part / total) * 100)
}
