import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'

export function LineRow({ line }) {
  return (
    <Tr plain>
      <Td truncate>{line.description}</Td>
      <Td>{line.quantity}</Td>
      <Td>{line.unitAmount}</Td>
      <Td>{line.amount}</Td>
    </Tr>
  )
}
