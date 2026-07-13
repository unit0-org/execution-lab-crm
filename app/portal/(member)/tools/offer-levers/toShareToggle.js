// Flip one candidate's `shared` flag in the share-candidates list.
export function toShareToggle(people, contactId) {
  return people.map((person) => {
    if (person.contactId !== contactId) return person

    return { ...person, shared: !person.shared }
  })
}
