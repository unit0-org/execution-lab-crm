import { portalUrl } from './portalUrl'

// The link a person with a reserved seat follows to complete their
// registration: their cohort's register page carrying the reservation as a
// claim, so the form arrives prefilled and their own held seat never reads
// back to them as sold out.
export function reserveUrl(cohortSlug, registrationId) {
  return portalUrl(`/register/${cohortSlug}?reservation=${registrationId}`)
}
