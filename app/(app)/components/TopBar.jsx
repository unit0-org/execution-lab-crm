import { topBarStyle } from './TopBar.styles'
import { LogInteractionCTA } from './LogInteractionCTA'
import { SettingsButton } from './SettingsButton'

export function TopBar() {
  return (
    <header style={topBarStyle}>
      <LogInteractionCTA />
      <SettingsButton />
    </header>
  )
}
