import { ruleIdFromUrn } from '@/lib/linkedin/api/ruleIdFromUrn'
import { InfoRow } from './InfoRow'

function windowText(days) {
  if (!days) return 'window unknown'

  return `${days}-day window`
}

function trackingText({ conversion, attributionDays }) {
  if (!conversion) return 'Not tracked'

  const rule = ruleIdFromUrn(conversion.conversion_urn)

  return `Rule ${rule} · ${windowText(attributionDays)}`
}

// Whether this event's registrations report to LinkedIn ads, shown beside
// the event's own facts so it reads at a glance without opening Settings.
export function EventTracking({ settings = {} }) {
  return <InfoRow label="LinkedIn">{trackingText(settings)}</InfoRow>
}
