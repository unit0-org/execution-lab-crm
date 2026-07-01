import { cohortCardData } from '@/lib/portal/cohortCardData'
import { validCoupon } from '@/lib/portal/validCoupon'
import { PortalBody } from '../components/PortalBody'

// Server-side load of the open cohorts for the public portal. A valid
// ?code= coupon reflects in the prices and rides the register links.
export async function PortalServer({ searchParams }) {
  const { code } = await searchParams
  const coupon = await validCoupon(code)
  const cohorts = await cohortCardData(coupon)

  return <PortalBody cohorts={cohorts} coupon={coupon} />
}
