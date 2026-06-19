'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { MeetingMergeBar } from './MeetingMergeBar'
import { MeetingMergeModal } from './MeetingMergeModal'
import { useMeetingMergeFlow } from '../hooks/useMeetingMergeFlow'

export function MeetingsToolbar({ meetings, selection, onMerged }) {
  const refresh = () => { selection.clear(); onMerged() }
  const merge = useMeetingMergeFlow(refresh)
  const chosen = meetings.filter((m) => selection.ids.has(m.id))
  const count = selection.ids.size

  return (
    <>
      <StickyBar active={count > 0}>
        <MeetingMergeBar count={count} canMerge={count > 1}
          onMerge={() => merge.start(chosen)} />
      </StickyBar>
      <MeetingMergeModal meetings={merge.review} onConfirm={merge.confirm}
        onCancel={merge.cancel} />
    </>
  )
}
