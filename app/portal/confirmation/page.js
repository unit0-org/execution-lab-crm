import { ConfirmationServer } from './ConfirmationServer'

// Live render: reads the just-completed Stripe session id off the URL.
export const dynamic = 'force-dynamic'

export default function ConfirmationPage({ searchParams }) {
  return <ConfirmationServer searchParams={searchParams} />
}
