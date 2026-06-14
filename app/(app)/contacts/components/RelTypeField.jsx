'use client'

import { Select } from '@/ui/atoms/Select'
import { CustomRelInput } from './CustomRelInput'
import { useRelTypeSelect } from '../hooks/useRelTypeSelect'

export function RelTypeField({ value, onChange }) {
  const fields = useRelTypeSelect(value, onChange)

  return (
    <>
      <Select label="Relationship" options={fields.names}
        value={fields.current} onChange={fields.select} />
      <CustomRelInput show={fields.custom} value={value.label}
        onChange={fields.typeCustom} />
    </>
  )
}
