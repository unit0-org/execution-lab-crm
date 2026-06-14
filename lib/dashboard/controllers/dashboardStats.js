import { revenueSince } from './revenueSince'
import { daysAgo } from './daysAgo'

const onOrAfter = (date, since) => date && new Date(date) >= since

// Headline counts: new leads (7d), active leads (30d), customers, revenue.
export async function dashboardStats(signals) {
  const leads = signals.filter((s) => !s.isCustomer)
  const week = daysAgo(7)
  const month = daysAgo(30)

  return {
    newLeads: leads.filter((s) => onOrAfter(s.firstActivity, week)).length,
    activeLeads: leads.filter((s) => onOrAfter(s.lastActivity, month)).length,
    customers: signals.filter((s) => s.isCustomer).length,
    revenue: await revenueSince(month)
  }
}
