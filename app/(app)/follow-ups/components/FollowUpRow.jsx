import { AppLink } from '@/ui/AppLink'
import { Inline } from '@/ui/Inline'
import { rowStyle, reasonStyle } from './FollowUpRow.styles'
import { SnoozeMenu } from './SnoozeMenu'
import { MarkDoneForm } from './MarkDoneForm'

export function FollowUpRow({ flag }) {
  const c = flag.contacts
  return (
    <div style={rowStyle}>
      <div>
        <AppLink href={`/contacts/${c?.id}`}>{c?.display_name || 'Unknown contact'}</AppLink>
        {flag.reason && <div style={reasonStyle}>{flag.reason}</div>}
      </div>
      <Inline gap="md">
        <SnoozeMenu flagId={flag.id} />
        <MarkDoneForm flagId={flag.id} />
      </Inline>
    </div>
  )
}
