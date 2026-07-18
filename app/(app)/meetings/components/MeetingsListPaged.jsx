'use client'

import { MeetingsList } from './MeetingsList'
import { Pager } from '@/ui/molecules/Pager'

// The meetings table plus its prev/next pager, driven by the useMeetings
// hook object (its rows, current page, page count, and goTo handler).
export function MeetingsListPaged({ meetings, selection }) {
  return (
    <>
      <MeetingsList meetings={meetings.meetings} selection={selection} />
      <Pager at={meetings.page} total={meetings.pageCount}
        onMove={meetings.goTo} label="page" />
    </>
  )
}
