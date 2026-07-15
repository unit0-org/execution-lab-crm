'use client'

import { useState } from 'react'
import { useSubmitFormOnCtrlEnter } from './useSubmitFormOnCtrlEnter'
import { FormValuesContext } from '@/ui/atoms/FormValuesContext'

/**
 * Bare form bound to a server action — the primitive `Form` builds on, and
 * the form for always-present cases (the notes composer) that must not grab
 * focus on mount. Ctrl/Cmd+Enter submits from any field, and typed values
 * survive a failed submit. Pass `formRef` to place a ref on the `<form>`.
 */
export function BareForm({ action, children, formRef }) {
  const onKeyDown = useSubmitFormOnCtrlEnter()
  const [values, setValues] = useState(null)
  const submit = (formData) => {
    setValues(Object.fromEntries(formData))

    return action(formData)
  }

  return (
    <FormValuesContext.Provider value={values}>
      <form ref={formRef} action={submit} onKeyDown={onKeyDown}>
        {children}
      </form>
    </FormValuesContext.Provider>
  )
}
