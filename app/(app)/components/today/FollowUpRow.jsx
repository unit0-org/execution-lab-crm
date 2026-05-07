import { GridRow } from '@/ui/GridRow'
import { AppLink } from '@/ui/AppLink'
import { Text } from '@/ui/Text'
import { DueLabel } from './DueLabel'

export function FollowUpRow({ flag }) {
  const c = flag.contacts

  return (
    <GridRow template="content-meta" variant="card">
      <div>
        <AppLink href={`/contacts/${c?.id}`}>{c?.display_name || 'Unknown contact'}</AppLink>
        {flag.reason && <Text tone="muted" size="sm">{flag.reason}</Text>}
      </div>
      <DueLabel due={flag.due_date} />
    </GridRow>
  )
}
