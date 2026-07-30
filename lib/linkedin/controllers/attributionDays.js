// LinkedIn accepts only these post-click windows; anything else is a 400.
// 7 days is our default: long enough to catch the think-about-it gap
// before someone registers, short enough to stay honest about the click
// that earned it.
export const ATTRIBUTION_CHOICES = [1, 7, 28, 30, 90]
export const DEFAULT_ATTRIBUTION_DAYS = 7

export function parseAttributionDays(value) {
  const days = Number(value)

  if (ATTRIBUTION_CHOICES.includes(days)) return days

  return DEFAULT_ATTRIBUTION_DAYS
}
