// Safe zero-valued digest for users without an organization membership.
export function emptyDigest() {
  return {
    followUps: { items: [], overflow: 0 },
    attendees: [],
    newCustomers: [],
    birthdays: [],
    hotLeads: []
  }
}
