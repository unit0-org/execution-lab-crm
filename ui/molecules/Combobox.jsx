'use client'

import { useRef } from 'react'
import { TextField } from '../atoms/TextField'
import { SuggestionList } from './SuggestionList'
import { useToggle } from './useToggle'
import { useOutsideClose } from './useOutsideClose'
import { wrapStyle } from './Combobox.styles'

// A text field that suggests options as you type; pick one to choose it.
export function Combobox({ label, value, onChange, options, onPick, hint }) {
  const ref = useRef(null)
  const menu = useToggle()
  useOutsideClose(ref, menu.hide, menu.open)
  const type = (e) => { onChange(e.target.value); menu.show() }
  const pick = (option) => { onPick(option); menu.hide() }

  return (
    <div ref={ref} style={wrapStyle}>
      <TextField label={label} value={value} onChange={type}
        onFocus={menu.show} placeholder={hint} autoComplete="off" />
      <SuggestionList open={menu.open} anchor={ref} options={options}
        onPick={pick} />
    </div>
  )
}
