const MIN = 60000
const HOUR = 60 * MIN
const DAY = 24 * HOUR

function ago(at) {
  const d = Date.now() - new Date(at).getTime()
  if (d < MIN) return 'just now'
  if (d < HOUR) return `${Math.floor(d / MIN)} min ago`
  if (d < DAY) return `${Math.floor(d / HOUR)} h ago`
  return `${Math.floor(d / DAY)} d ago`
}

export function RelativeTime({ at }) {
  if (!at) return <>never</>
  return <>{ago(at)}</>
}
