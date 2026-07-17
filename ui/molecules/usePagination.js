'use client'

import { useState } from 'react'

// Slices `items` into `perPage` pages, clamping the current page if the
// list shrinks so we never land on a blank page past the end.
export function usePagination(items, perPage = 10) {
  const [page, setPage] = useState(1)
  const pageCount = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(page, pageCount)
  const start = (current - 1) * perPage

  return {
    paged: items.slice(start, start + perPage),
    page: current,
    pageCount,
    setPage
  }
}
