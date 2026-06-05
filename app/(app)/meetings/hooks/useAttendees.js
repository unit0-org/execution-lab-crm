'use client'

import { useState } from 'react'
import { useContactOptions } from './useContactOptions'
import { attendeeOptions } from './attendeeOptions'

// Holds the attendee search box, the chosen attendees and their matches.
export function useAttendees() {
  const all = useContactOptions()
  const [query, setQuery] = useState('')
  const [chosen, setChosen] = useState([])

  const pick = (option) => {
    setChosen((list) => [...list, option])
    setQuery('')
  }

  const remove = (value) =>
    setChosen((list) => list.filter((o) => o.value !== value))

  const options = attendeeOptions(all, query, chosen)

  return { query, onChange: setQuery, options, chosen, pick, remove }
}
