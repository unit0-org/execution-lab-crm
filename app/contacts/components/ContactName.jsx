function MissingName() { return <>—</> }

export function ContactName({ name }) {
  if (!name) return <MissingName />
  return <>{name}</>
}
