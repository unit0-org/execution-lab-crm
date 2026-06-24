import { MonoLink } from '@/ui/atoms/MonoLink'
import { RecordingItem } from './RecordingItem'

// One resource line: recordings play inline; everything else is a link.
export function MemberResourceItem({ item }) {
  if (item.kind === 'recording') return <RecordingItem item={item} />

  return <MonoLink href={item.url} size={13}>{item.title}</MonoLink>
}
