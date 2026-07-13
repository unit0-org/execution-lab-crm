import { GrowRow } from '@/ui/layout/GrowRow'
import { Heading } from '@/ui/atoms/Heading'
import { DigestSettings } from './DigestSettings'

// The dashboard title with a gear that opens the weekly-digest settings.
export function DashboardHeader({ setting }) {
  return (
    <GrowRow>
      <Heading gutter="none">Dashboard</Heading>
      <DigestSettings setting={setting} />
    </GrowRow>
  )
}
