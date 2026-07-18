'use server'

import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { countMeetings } from '@/lib/meeting/controllers/countMeetings'
import { withMember } from '@/lib/auth/withMember'
import { PAGE_SIZE } from '../pageSize'

// One page of the meetings list plus the total, for the prev/next pager.
export const meetingsPageAction = withMember(async (offset) => {
  const meetings = await listMeetings(PAGE_SIZE, offset || 0)
  const total = await countMeetings()

  return { meetings, total }
}, { meetings: [], total: 0 })
