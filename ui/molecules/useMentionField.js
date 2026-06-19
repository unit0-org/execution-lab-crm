'use client'

import { useState } from 'react'
import { matchOptions } from './matchOptions'
import { mentionQuery, insertMention } from './mentionText'
import { pickFirstOnKey } from './pickFirstOnKey'

// Track text + caret + the open @-token; insert picks and accept on key.
export function useMentionField(defaultValue, options) {
  const [value, setValue] = useState(defaultValue || '')
  const [caret, setCaret] = useState(0)
  const [picked, setPicked] = useState([])
  const [query, setQuery] = useState(null)
  const open = query !== null
  const matches = open ? matchOptions(options, query) : []
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
  const keyDown = (e) => pickFirstOnKey(e, matches, pick)

  return { value, change, pick, keyDown, open, picked, matches }
}
