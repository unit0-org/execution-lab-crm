import { FunnelFlow } from './FunnelFlow'

const stages = [
  {
    label: '1 · Attended', value: 165, tone: 'cold',
    caption: 'unique people · 237 check-ins'
  },
  {
    label: '2 · Nurturing', value: 106, tone: 'cool',
    caption: 'a touch after the event'
  },
  { label: '3 · Clients', value: 8, tone: 'warm', caption: 'after attending' }
]

// Overrides the catalog's centred layout: a funnel fills its container,
// and centring shrink-wraps it until the stages wrap for no reason.
const meta = {
  title: 'Molecules/FunnelFlow',
  component: FunnelFlow,
  parameters: { layout: 'padded' },
  args: { stages, steps: [64, 8] }
}

export default meta

export const Default = {}

export const Empty = {
  args: { stages: stages.map((s) => ({ ...s, value: 0 })), steps: [0, 0] }
}
