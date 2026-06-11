import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { WaitlistDetailRow } from './WaitlistDetailRow'

// Email, phone and the two free-text answers, then the join date.
export function WaitlistDetailFields({ entry }) {
  const phone = entry.phone || '—'

  return (
    <>
      <WaitlistDetailRow label="Email">
        <Text>{entry.email}</Text>
      </WaitlistDetailRow>
      <WaitlistDetailRow label="Phone">
        <Text>{phone}</Text>
      </WaitlistDetailRow>
      <WaitlistDetailRow label="Business">
        <Text>{entry.business}</Text>
      </WaitlistDetailRow>
      <WaitlistDetailRow label="Challenge">
        <Text>{entry.challenge}</Text>
      </WaitlistDetailRow>
      <WaitlistDetailRow label="Joined">
        <DateText value={entry.created_at} />
      </WaitlistDetailRow>
    </>
  )
}
