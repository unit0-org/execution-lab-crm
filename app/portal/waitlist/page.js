import { WaitlistJoin } from '../components/WaitlistJoin'

// Public waitlist join — just a form, no server data to load.
export const dynamic = 'force-dynamic'

export default function WaitlistPage() {
  return <WaitlistJoin />
}
