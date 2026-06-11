import { Link } from '@/ui/atoms/Link'

// The registrant's name, linked to their file within the cohort (their
// registration answers, payment, and a link out to their full CRM page).
export function RegistrantName({ registration }) {
  const name = `${registration.first_name} ${registration.last_name}`
  const href =
    `/cohorts/${registration.cohort_id}/registrations/${registration.id}`

  return <Link href={href}>{name}</Link>
}
