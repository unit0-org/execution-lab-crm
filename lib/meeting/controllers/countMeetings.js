import { Meeting } from '../models'

// Total meetings, so the list pager knows how many pages there are.
export function countMeetings() {
  return Meeting.count()
}
