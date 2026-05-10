import { Heading } from '@/ui/Heading'
import { Inline } from '@/ui/Inline'
import { RefreshNowButton } from './RefreshNowButton'

export function TodayHeader() {
  return (
    <Inline justify="space-between" gap="md">
      <Heading gutter="lg">Today</Heading>
      <RefreshNowButton />
    </Inline>
  )
}
