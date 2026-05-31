// A <form> with no default block layout — sits inline with siblings.
const style = { display: 'inline', margin: 0 }

export function InlineForm({ action, method, children }) {
  return <form action={action} method={method} style={style}>{children}</form>
}
