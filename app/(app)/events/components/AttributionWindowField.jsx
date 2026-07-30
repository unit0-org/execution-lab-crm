import { Select } from '@/ui/atoms/Select'
import {
  ATTRIBUTION_CHOICES, DEFAULT_ATTRIBUTION_DAYS
} from '@/lib/linkedin/controllers/attributionDays'

function dayLabel(days) {
  if (days === 1) return '1 day'

  return `${days} days`
}

const OPTIONS = ATTRIBUTION_CHOICES.map((days) => ({
  value: String(days),
  label: dayLabel(days)
}))

// How long after clicking the ad a registration still earns the campaign
// credit. It lives on the LinkedIn rule, not on us — this reads back what
// LinkedIn holds and writes the change straight to it.
export function AttributionWindowField({ attributionDays }) {
  const value = String(attributionDays || DEFAULT_ATTRIBUTION_DAYS)

  return (
    <Select label="Attribution window" name="attributionDays"
      options={OPTIONS} defaultValue={value} />
  )
}
