import { GridRow } from '@/ui/GridRow'
import { AppLink } from '@/ui/AppLink'
import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { SnoozeMenu } from './SnoozeMenu'
import { MarkDoneForm } from './MarkDoneForm'

export function FollowUpRow({ flag }) {
  const c = flag.contacts

  return (
    <GridRow template="content-actions">
      <div>
        <AppLink href={`/contacts/${c?.id}`}>{c?.display_name || 'Unknown contact'}</AppLink>
        {flag.reason && <Text tone="muted" size="sm">{flag.reason}</Text>}
      </div>
      <Inline gap="md">
        <SnoozeMenu flagId={flag.id} />
        <MarkDoneForm flagId={flag.id} />
      </Inline>
    </GridRow>
  )
}
