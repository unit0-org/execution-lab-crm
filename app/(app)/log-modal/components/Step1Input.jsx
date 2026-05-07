import { Field } from '@/ui/Field'
import { Textarea } from '@/ui/Textarea'
import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { Heading } from '@/ui/Heading'

export function Step1Input({ text, setText, submitText, onClose }) {
  return (
    <>
      <Heading gutter="md">Log interaction</Heading>
      <Field htmlFor="text" label="Free-form note">
        <Textarea id="text" rows={6} value={text} onChange={(e) => setText(e.target.value)} />
      </Field>
      <Inline gap="md" justify="flex-end">
        <Button onClick={onClose}>Cancel</Button>
        <Button tone="primary" onClick={submitText}>Parse</Button>
      </Inline>
    </>
  )
}
