// A button that looks like inline body text — for tiny in-flow actions
// like "sign out" inside a sentence.
const style = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'underline',
  font: 'inherit',
  padding: 0,
}

export function TextButton({ type = 'submit', children, ...rest }) {
  return (
    <button {...rest} type={type} style={style}>
      {children}
    </button>
  )
}
