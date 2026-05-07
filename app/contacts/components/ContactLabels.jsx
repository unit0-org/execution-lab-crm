import { Inline } from '@/ui/Inline'
import { ContactLabelChip } from './ContactLabelChip'
import { AddLabelPicker } from './AddLabelPicker'

const splitLabels = (labels, appliedIds) => ({
  applied: labels.filter((l) => appliedIds.includes(l.id)),
  available: labels.filter((l) => !appliedIds.includes(l.id)),
})

export function ContactLabels({ contactId, allLabels, appliedIds, onMutate }) {
  const { applied, available } = splitLabels(allLabels, appliedIds)

  return (
    <Inline gap="sm" align="center">
      {applied.map((l) => (
        <ContactLabelChip key={l.id} contactId={contactId} label={l} onMutate={onMutate} />
      ))}
      <AddLabelPicker contactId={contactId} available={available} onMutate={onMutate} />
    </Inline>
  )
}
