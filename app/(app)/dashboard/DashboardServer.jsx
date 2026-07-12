import { digestAction } from './actions/digest'
import { DigestBoard } from './components/DigestBoard'

export async function DashboardServer() {
  const digest = await digestAction()

  return <DigestBoard digest={digest} />
}
