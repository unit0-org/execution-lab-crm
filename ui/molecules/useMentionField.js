'use client'

import { useState } from 'react'
import { matchOptions } from './matchOptions'
import { mentionQuery, insertMention } from './mentionText'

// MentionField behavior: track text + caret, detect the open @-token,
// insert a picked member as "@Name ".
export function useMentionField(defaultValue, options) {
  const [value, setValue] = useState(defaultValue || '')
  const [caret, setCaret] = useState(0)
  const [picked, setPicked] = useState([])
  const [query, setQuery] = useState(null)
  const open = query !== null

  const change = (e) => {
    setValue(e.target.value)
    setCaret(e.target.selectionStart)
    setQuery(mentionQuery(e.target.value, e.target.selectionStart))
  }

  const pick = (option) => {
    setValue((v) => insertMention(v, caret, option.label))
    setPicked((p) => [...p, option])
    setQuery(null)
  }
  const matches = open ? matchOptions(options, query) : []

  return { value, change, pick, open, picked, matches }
}
