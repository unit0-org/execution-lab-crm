import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ContextField } from './ContextField'
import fields from '../data/offerContext.json'

export function OfferContextSection({ values, onField }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">Offer context</Heading>
        <Text size="sm" tone="muted" gutter="none">
          What you’re selling, to whom, and what you want from it.
        </Text>
        {fields.map((field) => (
          <ContextField key={field.id} field={field}
            value={values[field.id]} onChange={onField(field.id)} />
        ))}
      </Stack>
    </Card>
  )
}
