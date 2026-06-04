import { Badge } from '@/ui/atoms/Badge'

const LABELS = { true: 'Online', false: 'In person' }
const TONES = { true: 'accent', false: 'neutral' }

// Badge showing whether a meeting happened online or in person.
export function MeetingType({ online }) {
  return <Badge tone={TONES[online]}>{LABELS[online]}</Badge>
}
