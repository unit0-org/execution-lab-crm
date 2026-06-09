import { Suspense } from 'react'
import { forbidden } from 'next/navigation'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { SettingsTabsView } from './components/SettingsTabsView'

// Gate settings to org admins server-side (a real 403), then render the
// tabs. Runs before any Suspense boundary so forbidden() interrupts clean.
export async function SettingsServer() {
  const m = await currentMembership()

  if (m?.role !== 'admin') forbidden()

  return (
    <Suspense>
      <SettingsTabsView />
    </Suspense>
  )
}
