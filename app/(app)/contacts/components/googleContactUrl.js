// The Google Contacts web URL for a People API resource name
// ("people/c123" → https://contacts.google.com/person/c123).
export function googleContactUrl(resourceName) {
  const id = resourceName.replace('people/', '')

  return `https://contacts.google.com/person/${id}`
}
