const style = { display: 'inline', margin: 0 }

/** Inline (e.g. GET) form — no block layout, sits with its siblings. */
export function InlineForm({ action, method, children }) {
  return <form action={action} method={method} style={style}>{children}</form>
}
