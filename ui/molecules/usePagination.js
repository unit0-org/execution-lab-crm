'use client'

import { useState } from 'react'

// Slices `items` into pages, clamping the current page if the list shrinks
// so we never land past the end. `perPage` is stateful (default 25) so a
// page-size control can change it; changing it returns to page 1.
export function usePagination(items, initialPerPage = 25) {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(initialPerPage)
  const pageCount = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(page, pageCount)
  const start = (current - 1) * perPage

  const changePerPage = (n) => {
    setPerPage(n)
    setPage(1)
  }

  return {
    paged: items.slice(start, start + perPage),
    page: current,
    pageCount,
    setPage,
    perPage,
    setPerPage: changePerPage
  }
}
