'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { parseLabelIds, toggledSet, writeLabelIds } from './labelFilterUrl'

// Label-id filter for the contacts list, seeded from and mirrored to the URL
// (?labels=…) so navigating into a contact and back restores the filter. The
// URL write skips a server refetch; label filtering stays client-side.
export function useLabelFilter() {
  const params = useSearchParams()
  const [ids, setIds] = useState(() => parseLabelIds(params.get('labels')))

  const apply = (next) => {
    setIds(next)
    writeLabelIds(next)
  }

  return {
    ids,
    toggle: (id) => apply(toggledSet(ids, id)),
    clear: () => apply(new Set())
  }
}
