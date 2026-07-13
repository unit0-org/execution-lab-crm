// Set the birthday parts (day/month/year) for one contact.
export function setBirthday(id, parts) {
  return this.update(parts, { where: { id } })
}
