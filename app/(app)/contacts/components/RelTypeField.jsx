'use client'

import { Select } from '@/ui/atoms/Select'
import { CustomRelInput } from './CustomRelInput'
import { useRelTypeSelect } from '../hooks/useRelTypeSelect'

export function RelTypeField({ value, onChange }) {
  const f = useRelTypeSelect(value, onChange)

  return (
    <>
      <Select label="Relationship" options={f.names} value={f.current}
        onChange={f.select} />
      <CustomRelInput show={f.custom} value={value.label}
        onChange={f.typeCustom} />
    </>
  )
}
