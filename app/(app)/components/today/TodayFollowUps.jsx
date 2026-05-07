import { TodaySection } from './TodaySection'
import { FollowUpRow } from './FollowUpRow'

export function TodayFollowUps({ flags }) {
  return (
    <TodaySection title="Today's follow-ups" count={flags.length} empty="Nothing due today.">
      {flags.map((f) => <FollowUpRow key={f.id} flag={f} />)}
    </TodaySection>
  )
}
