import { Card } from '@/ui/atoms/Card'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { RecordingItem } from './RecordingItem'

// One resource "file" boxed in a card; recordings play inline.
function ResourceBody({ item }) {
  if (item.kind === 'recording') return <RecordingItem item={item} />

  return <MonoLink href={item.url} size={13}>{item.title}</MonoLink>
}

export function MemberResourceItem({ item }) {
  return (
    <Card>
      <ResourceBody item={item} />
    </Card>
  )
}
