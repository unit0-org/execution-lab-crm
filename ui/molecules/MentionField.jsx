'use client'

import { useRef } from 'react'
import { fieldStyle } from '../atoms/TextField.styles'
import { textAreaStyle } from '../atoms/TextArea.styles'
import { wrapStyle } from './Combobox.styles'
import { SuggestionList } from './SuggestionList'
import { useMentionField } from './useMentionField'

// A textarea with an @-mention autocomplete: type @ to tag a member, and
// post the text under `name` plus the picked ids under `idsName`.
export function MentionField(props) {
  const { label, name, idsName, defaultValue, options, ...rest } = props
  const anchor = useRef(null)
  const m = useMentionField(defaultValue, options)
  const ids = m.picked.map((p) => p.value).join(',')

  return (
    <label style={fieldStyle}>
      {label}
      <div ref={anchor} style={wrapStyle}>
        <textarea name={name} value={m.value} onChange={m.change}
          style={textAreaStyle} {...rest} />
        <SuggestionList open={m.open} anchor={anchor} options={m.matches}
          onPick={m.pick} />
      </div>
      <input type="hidden" name={idsName} value={ids} />
    </label>
  )
}
