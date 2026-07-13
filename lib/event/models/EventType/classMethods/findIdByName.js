// Find an event type's id by name, or null when none matches.
export async function findIdByName(name) {
  if (!name) return null

  const row = await this.findOne({ where: { name } })

  return row ? row.id : null
}
