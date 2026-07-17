'use client'

import { Button } from '@/ui/atoms/Button'

// "Load more" for the paginated meetings list; hidden once the last page is
// in. A full-width quiet button, so no styling lives at the call site.
export function LoadMore({ show, onClick }) {
  if (!show) return null

  return (
    <Button tone="quiet" block onClick={onClick}>Load more</Button>
  )
}
