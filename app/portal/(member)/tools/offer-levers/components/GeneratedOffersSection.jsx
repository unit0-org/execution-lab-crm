import { Card } from '@/ui/atoms/Card'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { RepeatableInputs } from './RepeatableInputs'
import { outputFields } from '../offerInputTypes'

const field = outputFields[0]

// Below the levers, in a collapsible card matching Offer context: paste back
// the offers the AI generated (multiline; line breaks preserved).
export function GeneratedOffersSection({ lists, saved, on }) {
  const add = () => on.add(field.inputType)

  return (
    <Card>
      <Collapsible title="Generated offers" defaultOpen={false}>
        <Stack gap="md">
          <RepeatableInputs field={field} items={lists[field.inputType]}
            saved={saved} onUpdate={on.update} onRemove={on.remove} />
          <Inline>
            <Button onClick={add}>Add offer</Button>
          </Inline>
        </Stack>
      </Collapsible>
    </Card>
  )
}
