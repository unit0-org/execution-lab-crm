function Saving()  { return <>Saving…</> }
function Default() { return <>Log entry</> }

export function SubmitButtonLabel({ pending }) {
  if (pending) return <Saving />
  return <Default />
}
