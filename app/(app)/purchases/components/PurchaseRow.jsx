import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { BuyerLink } from './BuyerLink'
import { PurchaseAmount } from './PurchaseAmount'

export function PurchaseRow({ purchase }) {
  return (
    <Tr>
      <Td truncate>{purchase.product}</Td>
      <Td>
        <BuyerLink name={purchase.buyer} contactId={purchase.contactId} />
      </Td>
      <Td>
        <PurchaseAmount amount={purchase.amount}
          refunded={purchase.refunded} />
      </Td>
      <Td><DateText value={purchase.date} /></Td>
    </Tr>
  )
}
