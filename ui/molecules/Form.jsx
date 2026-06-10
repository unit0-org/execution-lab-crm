'use client'

import { useState } from 'react'
import { useSubmitFormOnCtrlEnter } from './useSubmitFormOnCtrlEnter'
import { FormValuesContext } from '@/ui/atoms/FormValuesContext'

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
