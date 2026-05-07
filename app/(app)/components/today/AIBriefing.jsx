import { BriefingCard } from '@/ui/BriefingCard'

export function AIBriefing({ briefing }) {
  if (!briefing?.body) return null

  return <BriefingCard>{briefing.body}</BriefingCard>
}
