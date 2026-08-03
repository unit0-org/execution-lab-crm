'use client'

import { useState } from 'react'

const EMPTY = { name: '', email: '' }

// Who a seat is being reserved for: typed by hand, or filled in by picking
// an existing contact. The pick is only a shortcut — the fields stay
// editable, and the email is what identifies them either way.
export function useReservePerson() {
  const [person, setPerson] = useState(EMPTY)
  const [query, setQuery] = useState('')

  const set = (field) => (e) =>
    setPerson((cur) => ({ ...cur, [field]: e.target.value }))

  const pick = (option) => {
    setQuery('')
    setPerson({ name: option.name, email: option.email })
  }

  return {
    person, set, pick, query, onType: setQuery,
    ready: Boolean(person.name.trim() && person.email.trim())
  }
}
