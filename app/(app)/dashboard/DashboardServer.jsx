import { Stack } from '@/ui/layout/Stack'
import { digestAction } from './actions/digest'
import { getDigestSettingAction } from './actions/getDigestSetting'
import { DashboardHeader } from './components/DashboardHeader'
import { DigestBoard } from './components/DigestBoard'

export async function DashboardServer() {
  const [board, setting] = await Promise.all([
    digestAction(),
    getDigestSettingAction()
  ])
  const digestSetting = setting || {}

  return (
    <Stack gap="lg">
      <DashboardHeader setting={digestSetting} />
      <DigestBoard digest={board} />
    </Stack>
  )
}
