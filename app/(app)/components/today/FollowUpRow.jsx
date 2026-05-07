import { AppLink } from '@/ui/AppLink'
import { rowStyle, reasonStyle } from './FollowUpRow.styles'
import { DueLabel } from './DueLabel'

export function FollowUpRow({ flag }) {
  const c = flag.contacts
  return (
    <div style={rowStyle}>
      <div>
        <AppLink href={`/contacts/${c?.id}`}>{c?.display_name || 'Unknown contact'}</AppLink>
        {flag.reason && <div style={reasonStyle}>{flag.reason}</div>}
      </div>
      <DueLabel due={flag.due_date} />
    </div>
  )
}
