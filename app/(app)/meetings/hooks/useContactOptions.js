'use client'

import { useEffect, useState } from 'react'
import { listContactsAction } from '../actions/listContacts'
import { toContactOptions } from './toContactOptions'

// Loads contacts once and shapes them into attendee combobox options.
export function useContactOptions() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    listContactsAction().then((rows) => setOptions(toContactOptions(rows)))
  }, [])

  return options
}
