import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { MergeButton } from './MergeButton'

export function MeetingMergeBar({ count, canMerge, onMerge }) {
  return (
    <Inline gap="md">
      <Text size="sm">{count} selected</Text>
      <MergeButton show={canMerge} onMerge={onMerge} />
    </Inline>
  )
}
