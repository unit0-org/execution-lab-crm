'use client'

import { useRef } from 'react'
import { useToggle } from './useToggle'
import { useOutsideClose } from './useOutsideClose'

export function useAutocomplete(onType, onPick) {
  const ref = useRef(null)
  const menu = useToggle()
  useOutsideClose(ref, menu.hide, menu.open)

  const type = (e) => { onType(e.target.value); menu.show() }
  const pick = (option) => { onPick(option); menu.hide() }

  return { ref, menu, type, pick }
}
