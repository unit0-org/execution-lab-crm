import { getDigestSettingAction } from './actions/getDigestSetting'
import { DigestForm } from './components/DigestForm'

// Server-side load for the weekly-digest settings tab.
export async function DigestServer() {
  const setting = await getDigestSettingAction()
  const data = setting || {}

  return <DigestForm setting={data} />
}
