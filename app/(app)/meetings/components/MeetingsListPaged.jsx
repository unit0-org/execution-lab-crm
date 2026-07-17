'use client'

import { MeetingsList } from './MeetingsList'
import { LoadMore } from './LoadMore'

// The meetings table plus its "Load more" pager, driven by the useMeetings
// hook object (its rows, hasMore flag, and loadMore handler).
export function MeetingsListPaged({ meetings, selection }) {
  return (
    <>
      <MeetingsList meetings={meetings.meetings} selection={selection} />
      <LoadMore show={meetings.hasMore} onClick={meetings.loadMore} />
    </>
  )
}
