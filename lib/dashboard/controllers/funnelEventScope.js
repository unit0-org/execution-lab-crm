import { Op } from 'sequelize'
import { periodStart } from './funnelPeriods'

// Events already hosted within the period. A future-dated event never
// counts, so "events" on the dashboard always means events that actually
// happened — an upcoming one would otherwise drag every rate down.
export function funnelEventScope(period, now = new Date()) {
  const since = periodStart(period, now)

  if (!since) return { date: { [Op.lte]: now } }

  return { date: { [Op.gte]: since, [Op.lte]: now } }
}
