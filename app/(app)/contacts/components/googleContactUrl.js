// The Google Contacts web URL for a People API resource name
// ("people/c123" → https://contacts.google.com/person/c123). The account
// email is pinned with authuser so it opens under the right login when
// several Google accounts are signed in (otherwise: "Contact not found").
export function googleContactUrl(resourceName, email) {
  const id = resourceName.replace('people/', '')
  const url = `https://contacts.google.com/person/${id}`

  if (!email) return url

  return `${url}?authuser=${encodeURIComponent(email)}`
}
