'use client'

import { useEffect } from 'react'

// Set the browser tab title while mounted, restoring the previous one on
// unmount so other pages keep their default title.
export function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return

    const previous = document.title
    document.title = title

    return () => {
      document.title = previous
    }
  }, [title])
}
