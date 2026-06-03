import { fn, col, Op, where } from 'sequelize'
import { MeetingAttachment } from '../models'

// Attachment URLs that appear on more than one meeting — recurring-series
// artifacts (e.g. Gemini notes pinned to every occurrence). Treated as
// noise and hidden from any single meeting.
export async function sharedUrls() {
  const rows = await MeetingAttachment.findAll({
    attributes: ['url'],
    group: ['url'],
    having: where(fn('COUNT', col('id')), Op.gt, 1)
  })

  return new Set(rows.map((row) => row.url))
}
