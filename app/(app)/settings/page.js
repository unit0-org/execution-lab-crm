import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { AdminOnly } from './components/AdminOnly'
import { SettingsTabsView } from './components/SettingsTabsView'

export default function SettingsPage() {
  return (
    <Page width="wide">
      <AdminOnly>
        <Suspense>
          <SettingsTabsView />
        </Suspense>
      </AdminOnly>
    </Page>
  )
}
