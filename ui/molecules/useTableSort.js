'use client'

import { useState } from 'react'
import { compareValues } from './compareValues'

const flip = (d) => (d === 'asc' ? 'desc' : 'asc')

const valueGetter = (columns, key) => {
  const col = columns.find((c) => c.key === key)

  return col?.sortBy || ((row) => row[key])
}

export function useTableSort(rows, columns, initialKey) {
  const [key, setKey] = useState(initialKey)
  const [dir, setDir] = useState('asc')
  const get = valueGetter(columns, key)
  const factor = dir === 'asc' ? 1 : -1

  const sorted = [...rows]
    .sort((a, b) => compareValues(get(a), get(b)) * factor)

  const toggle = (next) => {
    setDir((d) => (next === key ? flip(d) : 'asc'))
    setKey(next)
  }

  return { sorted, sort: { key, dir }, toggle }
}
