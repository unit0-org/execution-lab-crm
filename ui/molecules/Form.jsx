'use client'

import { useSubmitFormOnCtrlEnter } from './useSubmitFormOnCtrlEnter'

export function Form({ action, children }) {
  const onKeyDown = useSubmitFormOnCtrlEnter()

  return (
    <form action={action} onKeyDown={onKeyDown}>{children}</form>
  )
}
