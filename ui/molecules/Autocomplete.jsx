'use client'

import { TextField } from '../atoms/TextField'
import { AutocompleteMenu } from './AutocompleteMenu'
import { useAutocomplete } from './useAutocomplete'
import { matchOptions, hasExactLabel } from './matchOptions'
import { wrapStyle } from './Combobox.styles'

/**
 * **Preferred** typeahead: filters to the top 5 matches and shows an
 * inline `+ New <createLabel> "<query>"` row when nothing matches (omit
 * `onCreate` to disable).
 */
export function Autocomplete(props) {
  const { label, value, onType, options, onPick } = props
  const { onCreate, createLabel, hint } = props
  const { ref, menu, type, pick } = useAutocomplete(onType, onPick)
  const create = () => { onCreate(value); menu.hide() }
  const canCreate = !!onCreate && !!value.trim()
    && !hasExactLabel(options, value)

  return (
    <div ref={ref} style={wrapStyle}>
      <TextField label={label} value={value} onChange={type}
        onFocus={menu.show} placeholder={hint} autoComplete="off" />
      <AutocompleteMenu open={menu.open} anchor={ref} onPick={pick}
        query={value} options={matchOptions(options, value)}
        onCreate={create} canCreate={canCreate} createLabel={createLabel} />
    </div>
  )
}
