'use client'

const formStyle = { display: 'inline', margin: 0 }

const onSubmit = (message) => (e) => {
  if (!window.confirm(message)) e.preventDefault()
}

// Same shape as InlineForm but blocks submission unless the user
// clicks OK on a confirm prompt. Use for any destructive action.
export function ConfirmInlineForm({ message, action, method, children }) {
  return (
    <form action={action} method={method} onSubmit={onSubmit(message)} style={formStyle}>
      {children}
    </form>
  )
}
