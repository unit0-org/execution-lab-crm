import { Page } from '@/ui/layout/Page'
import { SettingsServer } from './SettingsServer'

export default function SettingsPage({ searchParams }) {
  return (
    <Page width="wide">
      <SettingsServer searchParams={searchParams} />
    </Page>
  )
}
