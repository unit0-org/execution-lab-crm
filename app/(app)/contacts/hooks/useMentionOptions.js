'use client'

import { useState, useEffect } from 'react'
import { listMentionableMembersAction }
  from '../actions/listMentionableMembers'

const toOptions = (members) =>
  members.map((m) => ({ value: m.userId, label: m.name }))

// The member directory as autocomplete options for @-mentions.
export function useMentionOptions() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    listMentionableMembersAction().then(toOptions).then(setOptions)
  }, [])

  return options
}
