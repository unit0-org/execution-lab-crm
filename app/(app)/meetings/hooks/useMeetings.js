'use client'

import { useState } from 'react'
import { meetingsPageAction } from '../actions/meetingsPage'
import { PAGE_SIZE } from '../pageSize'

export function useMeetings(initialMeetings, initialTotal) {
  const [meetings, setMeetings] = useState(initialMeetings)
  const [total, setTotal] = useState(initialTotal)
  const [page, setPage] = useState(0)

  const goTo = (next) =>
    meetingsPageAction(next * PAGE_SIZE).then((res) => {
      setMeetings(res.meetings)
      setTotal(res.total)
      setPage(next)
    })

  const pageCount = Math.ceil(total / PAGE_SIZE) || 1

  return {
    meetings, page, pageCount, loading: false,
    goTo, reload: () => goTo(page)
  }
}
