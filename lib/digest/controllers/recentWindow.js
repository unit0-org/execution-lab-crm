import { daysAgo } from '@/lib/dashboard/controllers/daysAgo'

// The cutoff Date for the digest's "this week" sections — seven days back.
export function sevenDaysAgo() {
  return daysAgo(7)
}
