// The new-customers section view: who crossed over and what triggered it.
export function customerView(customers) {
  return {
    title: 'New customers this week',
    emptyText: 'No new customers this week.',
    rows: customers.map((c) => ({ primary: c.name, secondary: c.via }))
  }
}
