import { reasonsFor } from './reasonsFor'

const TIERS = [[7, 3], [30, 2], [90, 1]]

const recencyWeight = (last) => {
  if (!last) return 0

  const days = (Date.now() - new Date(last)) / 86400000
  const tier = TIERS.find(([limit]) => days <= limit)

  return tier ? tier[1] : 0.5
}

const heatFor = (score) => Math.min(5, Math.round(score / 6))

const baseScore = (s) => s.purchases * 5 + s.checkins * 3 + s.meetings * 2

// Recency-weighted engagement score, a 0–5 heat rating, and reason chips.
export function scoreLead(s) {
  const score = baseScore(s) * recencyWeight(s.lastActivity)

  return { ...s, score, heat: heatFor(score), reasons: reasonsFor(s) }
}
