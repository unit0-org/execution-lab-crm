'use client'

import { useState } from 'react'
import { useSubmitFormOnCtrlEnter } from './useSubmitFormOnCtrlEnter'
import { FormValuesContext } from '@/ui/atoms/FormValuesContext'

/**
 * Form bound to a server action; Ctrl/Cmd+Enter submits from any field,
 * and typed values survive a failed submit (uncontrolled `TextField`/
 * `TextArea`/`Select` repopulate automatically).
 */
export function Form({ action, children }) {
  const onKeyDown = useSubmitFormOnCtrlEnter()
  const [values, setValues] = useState(null)
  const submit = (formData) => {
    setValues(Object.fromEntries(formData))

    return action(formData)
  }

  return (
    <FormValuesContext.Provider value={values}>
      <form action={submit} onKeyDown={onKeyDown}>{children}</form>
    </FormValuesContext.Provider>
  )
}
