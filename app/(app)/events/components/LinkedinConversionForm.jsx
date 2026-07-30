'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { FormActions } from '@/ui/molecules/FormActions'
import { LinkedinConversionFields } from './LinkedinConversionFields'
import { ConversionUnlink } from './ConversionUnlink'
import { useSaveEventConversion } from '../hooks/useSaveEventConversion'
import { useRemoveEventConversion } from '../hooks/useRemoveEventConversion'

export function LinkedinConversionForm({ eventId, conversion, onChanged }) {
  const { action } = useSaveEventConversion(onChanged)
  const { remove } = useRemoveEventConversion(eventId, onChanged)
  const linked = Boolean(conversion)

  return (
    <Form action={action}>
      <input type="hidden" name="eventId" value={eventId} />
      <Stack gap="sm">
        <SectionHeader title="LinkedIn ads" />
        <LinkedinConversionFields conversion={conversion} />
        <FormActions
          extra={<ConversionUnlink linked={linked} onConfirm={remove} />} />
      </Stack>
    </Form>
  )
}
