// What every write in an enrichment needs to know about its origin: the
// meeting date to backdate rows to, and the team member to attribute them to.
// Travels together so a new origin field doesn't add a parameter everywhere.
export function buildEnrichmentMeta(input, actor) {
  return {
    factDate: input.meeting?.startsAt,
    authorUserId: actor?.actorUserId || null
  }
}
