import { Op } from 'sequelize'
import { periodStart } from './eventPeriods'

// Events already hosted within the period. Always capped at now, so an
// upcoming event never counts — it would otherwise drag every conversion
// rate down, and make the events page disagree with the dashboard tile
// that links to it. Applied only when a period is asked for; the events
// list with no filter still shows what's coming.
export function hostedEventScope(period, now = new Date()) {
  const since = periodStart(period, now)

  if (!since) return { date: { [Op.lte]: now } }

  return { date: { [Op.gte]: since, [Op.lte]: now } }
}
