import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { WaitlistStatus } from './WaitlistStatus'

// One waitlist entry: position in line, name, email, status and join date.
export function WaitlistRow({ entry, position }) {
  const fullName = `${entry.first_name} ${entry.last_name || ''}`.trim()

  return (
    <Tr>
      <Td>{position}</Td>
      <Td truncate>{fullName}</Td>
      <Td truncate>{entry.email}</Td>
      <Td><WaitlistStatus status={entry.status} /></Td>
      <Td><DateText value={entry.created_at} /></Td>
    </Tr>
  )
}
