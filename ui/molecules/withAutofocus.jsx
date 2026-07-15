'use client'

import { useAutoFocusFirstField } from './useAutoFocusFirstField'

// Decorator: the autofocusing version of a form primitive — injects a focus
// ref so the first editable field is focused on mount. An always-present
// form (the notes composer) opts out by rendering the bare form instead.
export function withAutofocus(FormComponent) {
  return function AutofocusForm(props) {
    const formRef = useAutoFocusFirstField()

    return <FormComponent {...props} formRef={formRef} />
  }
}
