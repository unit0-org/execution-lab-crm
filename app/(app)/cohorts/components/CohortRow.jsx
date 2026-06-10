import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { CohortStatusSelect } from './CohortStatusSelect'
import { CohortEditButton } from './CohortEditButton'

export function CohortRow({ cohort, onChanged, onEdit }) {
  const spots = `${cohort.filled} / ${cohort.capacity}`
  const revenue = formatMoney(cohort.revenue, 'cad')

  return (
    <Tr>
      <Td truncate>{cohort.label}</Td>
      <Td><DateText value={cohort.start_date} /></Td>
      <Td>
        <CohortStatusSelect cohort={cohort} onChanged={onChanged} />
      </Td>
      <Td>{spots}</Td>
      <Td>{revenue}</Td>
      <Td><CohortEditButton cohort={cohort} onEdit={onEdit} /></Td>
    </Tr>
  )
}
