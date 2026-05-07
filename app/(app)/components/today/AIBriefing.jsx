import { briefingStyle } from './AIBriefing.styles'

export function AIBriefing({ briefing }) {
  if (!briefing?.body) return null

  return <p style={briefingStyle}>{briefing.body}</p>
}
