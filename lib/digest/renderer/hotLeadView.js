// The hot-leads section view: the hottest leads and why they surfaced.
export function hotLeadView(leads) {
  const rows = leads.map((lead) => ({
    primary: lead.name,
    secondary: lead.reasons.join(' · ')
  }))

  return {
    title: 'Hot leads',
    emptyText: 'No hot leads right now.',
    rows
  }
}
