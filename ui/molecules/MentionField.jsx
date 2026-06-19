'use client'

import { useRef } from 'react'
import { fieldStyle } from '../atoms/TextField.styles'
import { wrapStyle } from './Combobox.styles'
import { SuggestionList } from './SuggestionList'
import { MentionInput } from './MentionInput'
import { useMentionField } from './useMentionField'

// A textarea with @-mention autocomplete: type @ to tag a member (Tab or
// Enter accepts the first match), posting picked ids under `idsName`.
export function MentionField(props) {
  const { label, name, idsName, defaultValue, options, ...rest } = props
  const anchor = useRef(null)
  const m = useMentionField(defaultValue, options)
  const ids = m.picked.map((p) => p.value).join(',')
  const labels = m.picked.map((p) => p.label)

  return (
    <label style={fieldStyle}>
      {label}
      <div ref={anchor} style={wrapStyle}>
        <MentionInput m={m} name={name} labels={labels} rest={rest} />
        <SuggestionList open={m.open} anchor={anchor} options={m.matches}
          onPick={m.pick} />
      </div>
      <input type="hidden" name={idsName} value={ids} />
    </label>
  )
}
