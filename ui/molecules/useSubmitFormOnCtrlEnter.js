'use client'

// onKeyDown for a <form>: Ctrl+Enter (or Cmd+Enter on Mac) submits it
// from any field, so multi-line text areas get a keyboard submit too.
export function useSubmitFormOnCtrlEnter() {
  return (event) => {
    const combo = (event.metaKey || event.ctrlKey) &&
      event.key === 'Enter'

    if (!combo) return

    event.preventDefault()
    event.currentTarget.requestSubmit()
  }
}
