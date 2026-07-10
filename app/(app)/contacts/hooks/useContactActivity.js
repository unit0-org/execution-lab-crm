'use client'

import { useReveal } from './useReveal'

// The "add" dialogs the contact action bar opens, shared with each section
// so its + heading button and the bar drive the same modal.
export function useContactActivity() {
  return {
    fact: useReveal(), note: useReveal(), rel: useReveal(),
    task: useReveal(), file: useReveal()
  }
}
