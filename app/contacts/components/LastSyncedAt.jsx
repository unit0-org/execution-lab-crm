function Never() { return <>never</> }
function Timestamp({ at }) { return <>{new Date(at).toLocaleString()}</> }

export function LastSyncedAt({ at }) {
  if (!at) return <Never />
  return <Timestamp at={at} />
}
