// Nuggets are listed with a `fact:` prefix so a merged list can tell manual
// facts from event answers. Strip it to get the contact_fact row id.
export function factIdFromNugget(id) {
  return id.replace(/^fact:/, '')
}
