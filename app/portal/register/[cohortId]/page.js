import { RegisterServer } from './RegisterServer'

// Live render: cohort openness + seats must reflect the CRM at request
// time, and pricing is fetched fresh from Stripe.
export const dynamic = 'force-dynamic'

export default function RegisterPage({ params, searchParams }) {
  return <RegisterServer params={params} searchParams={searchParams} />
}
