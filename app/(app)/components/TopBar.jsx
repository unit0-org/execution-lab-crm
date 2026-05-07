import { PageBar } from '@/ui/PageBar'
import { LogInteractionCTA } from './LogInteractionCTA'
import { SettingsButton } from './SettingsButton'

export function TopBar() {
  return (
    <PageBar>
      <LogInteractionCTA />
      <SettingsButton />
    </PageBar>
  )
}
