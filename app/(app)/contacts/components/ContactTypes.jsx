import { Inline } from '@/ui/Inline'
import { ContactTypeChip } from './ContactTypeChip'
import { AddContactTypePicker } from './AddContactTypePicker'

const split = (allTypes, appliedIds) => ({
  applied:   allTypes.filter((t) => appliedIds.includes(t.id)),
  available: allTypes.filter((t) => !appliedIds.includes(t.id)),
})

export function ContactTypes({ contactId, allTypes, appliedIds, onMutate }) {
  const { applied, available } = split(allTypes, appliedIds)

  return (
    <Inline gap="sm" align="center">
      {applied.map((t) => (
        <ContactTypeChip key={t.id} contactId={contactId} type={t} onMutate={onMutate} />
      ))}
      <AddContactTypePicker contactId={contactId} available={available} onMutate={onMutate} />
    </Inline>
  )
}
