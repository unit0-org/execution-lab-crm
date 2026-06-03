import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { BuyerLink } from './BuyerLink'

export function PurchaseRow({ purchase }) {
  return (
    <Tr>
      <Td truncate>{purchase.product}</Td>
      <Td>
        <BuyerLink name={purchase.buyer} contactId={purchase.contactId} />
      </Td>
      <Td>{purchase.amount}</Td>
      <Td><DateText value={purchase.date} /></Td>
    </Tr>
  )
}
