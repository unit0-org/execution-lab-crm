import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { ContextField } from './ContextField'
import fields from '../data/offerContext.json'

export function OfferContextFields({ values, onField }) {
  return (
    <Stack gap="md">
      <Text size="sm" tone="muted" gutter="none">
        What you’re selling, to whom, and what you want from it.
      </Text>
      {fields.map((field) => (
        <ContextField key={field.id} field={field}
          value={values[field.id]} onChange={onField(field.id)} />
      ))}
    </Stack>
  )
}
