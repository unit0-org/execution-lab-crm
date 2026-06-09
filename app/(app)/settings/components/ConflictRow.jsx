import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Inline } from '@/ui/layout/Inline'
import { ResolveButton } from './ResolveButton'

export function ConflictRow({ conflict, onResolved }) {
  return (
    <Tr>
      <Td>{conflict.contactName}</Td>
      <Td>{conflict.field}</Td>
      <Td>{conflict.crmValue}</Td>
      <Td>{conflict.googleValue}</Td>
      <Td>
        <Inline gap="sm">
          <ResolveButton id={conflict.id} winner="crm"
            label="Keep CRM" onResolved={onResolved} />
          <ResolveButton id={conflict.id} winner="google"
            label="Keep Google" onResolved={onResolved} />
        </Inline>
      </Td>
    </Tr>
  )
}
