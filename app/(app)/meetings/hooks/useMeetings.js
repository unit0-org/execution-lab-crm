'use client'

import { useState } from 'react'
import { listMeetingsAction } from '../actions/listMeetings'
import { PAGE_SIZE } from '../pageSize'

export function useMeetings(initialMeetings) {
  const [meetings, setMeetings] = useState(initialMeetings)
  const [hasMore, setHasMore] = useState(initialMeetings.length === PAGE_SIZE)

  const receive = (page, offset) => {
    setMeetings((rows) => offset ? [...rows, ...page] : page)
    setHasMore(page.length === PAGE_SIZE)
  }

  const loadMore = () =>
    listMeetingsAction(PAGE_SIZE, meetings.length)
      .then((page) => receive(page, meetings.length))

  const reload = () =>
    listMeetingsAction(PAGE_SIZE, 0).then((page) => receive(page, 0))

  return { meetings, loading: false, hasMore, loadMore, reload }
}
