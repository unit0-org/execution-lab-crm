const optionLabel = (person) => {
  if (!person.name) return person.email

  return person.name + ' · ' + person.email
}

// Portal people this offer can still be shared with: not already shared, and
// not already staged. The email rides in the label so a search finds either.
export function toShareOptions(people, pickedIds) {
  const open = people.filter(
    (person) => !person.shared && !pickedIds.includes(person.contactId)
  )

  return open.map((person) => ({
    value: person.contactId, label: optionLabel(person)
  }))
}
