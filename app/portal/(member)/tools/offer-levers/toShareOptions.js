// Shape share candidates into CheckList options + the picked value ids.
export function toShareOptions(people) {
  const options = people.map((person) => ({
    value: person.contactId, label: person.name || person.email,
    desc: person.email
  }))
  const selected = people.filter((p) => p.shared).map((p) => p.contactId)

  return { options, selected }
}
