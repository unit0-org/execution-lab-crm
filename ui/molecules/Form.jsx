'use client'

import { withAutofocus } from './withAutofocus'
import { BareForm } from './BareForm'

const AutofocusForm = withAutofocus(BareForm)

/**
 * Form bound to a server action; Ctrl/Cmd+Enter submits from any field, its
 * first editable field autofocuses on mount, and typed values survive a
 * failed submit (uncontrolled `TextField`/`TextArea`/`Select` repopulate).
 */
export function Form({ action, children }) {
  return <AutofocusForm action={action}>{children}</AutofocusForm>
}
