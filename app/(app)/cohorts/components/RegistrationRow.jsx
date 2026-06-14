import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { PaymentStatus } from './PaymentStatus'
import { RegistrationAction } from './RegistrationAction'
import { RegistrantName } from './RegistrantName'

// One registrant: name (links to their contact), details, payment state.
export function RegistrationRow({ registration }) {
  return (
    <Tr>
      <Td truncate><RegistrantName registration={registration} /></Td>
      <Td truncate>{registration.email}</Td>
      <Td><PaymentStatus status={registration.status} /></Td>
      <Td><DateText value={registration.created_at} /></Td>
      <Td><RegistrationAction registration={registration} /></Td>
    </Tr>
  )
}
