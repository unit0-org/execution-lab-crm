// Extract canonical fields from a Google People `connection` resource.
export function readPerson(person) {
  const names = person.names || []

  return {
    googleContactId: person.resourceName, // e.g. "people/c12345"
    displayName: names[0]?.displayName || names[0]?.unstructuredName || null,
    emails: (person.emailAddresses || []).map((e, i) => ({
      email: e.value,
      is_primary: i === 0,
    })),
    phones: (person.phoneNumbers || []).map((p) => ({
      phone: p.value,
      label: p.type || null,
    })),
  }
}
