import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { RepeatableInputs } from './RepeatableInputs'
import { outputFields } from '../offerInputTypes'

const field = outputFields[0]

// Below the levers: keep the offers the AI generated from the copied prompt.
// Multiline (line breaks preserved); add as many as you like.
export function GeneratedOffersSection({ lists, saved, on }) {
  const add = () => on.add(field.inputType)

  return (
    <Card>
      <Stack gap="md">
        <SectionHeader title="Generated offers" addLabel="Add offer"
          onAdd={add} />
        <RepeatableInputs field={field} items={lists[field.inputType]}
          saved={saved} onUpdate={on.update} onRemove={on.remove} />
      </Stack>
    </Card>
  )
}
