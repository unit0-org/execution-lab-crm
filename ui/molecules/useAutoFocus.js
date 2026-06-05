'use client'

import { useEffect, useRef } from 'react'

const FIELD = 'input, select, textarea'

// Focus the first field inside the returned ref whenever `open` flips on.
export function useAutoFocus(open) {
  const ref = useRef(null)

  useEffect(() => {
    if (open) ref.current?.querySelector(FIELD)?.focus()
  }, [open])

  return ref
}
