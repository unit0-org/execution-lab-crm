'use client'

// Returns an onKeyDown handler that submits the field's form when the
// user presses Ctrl+Enter (or Cmd+Enter on Mac).
export function useSubmitOnCtrlEnter() {
  return (event) => {
    const combo = (event.metaKey || event.ctrlKey) && event.key === 'Enter'

    if (!combo) return

    event.preventDefault()
    event.currentTarget.form.requestSubmit()
  }
}
