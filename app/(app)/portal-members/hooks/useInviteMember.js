'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addUnique, removeValue, withoutPicked } from './selection'
import { runInvites } from './inviteMany'

// Drives the multi-invite picker: search + accumulate contacts, then
// invite them all, toast the result, and refresh the list.
export function useInviteMember(contacts, onClose) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [picked, setPicked] = useState([])
  const [busy, setBusy] = useState(false)

  const add = (option) => {
    setQuery('')
    setPicked((cur) => addUnique(cur, option))
  }
  const remove = (value) => setPicked((cur) => removeValue(cur, value))
  const submit = () => runInvites(picked, { setBusy, onClose, router })

  return {
    query, onType: setQuery, picked, add, remove, submit, busy,
    options: withoutPicked(contacts, picked)
  }
}
