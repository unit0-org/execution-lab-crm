'use client'

import { useEffect, useRef } from 'react'

const EDITABLE = 'input, select, textarea, [contenteditable="true"]'
const canFocus = (el) =>
  el.type !== 'hidden' && !el.disabled && !el.readOnly

// Focus the first editable field on mount so a form is ready to type into
// without a click. Skips hidden/disabled/read-only fields; never scrolls the
// page (so an inline form doesn't yank the viewport on load).
export function useAutoFocusFirstField() {
  const ref = useRef(null)

  useEffect(() => {
    const fields = ref.current?.querySelectorAll(EDITABLE) || []
    const first = Array.from(fields).find(canFocus)

    first?.focus({ preventScroll: true })
  }, [])

  return ref
}
