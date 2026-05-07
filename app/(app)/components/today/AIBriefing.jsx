import { Prose } from '@/ui/Prose'

export function AIBriefing({ briefing }) {
  if (!briefing?.body) return null

  return <Prose variant="briefing">{briefing.body}</Prose>
}
