import { tokenStyle, removeStyle } from './Token.styles'

/** Removable tag/token: a label plus a small × that calls `onRemove`. */
export function Token({ label, onRemove }) {
  return (
    <span style={tokenStyle}>
      {label}
      <button type="button" onClick={onRemove} aria-label="Remove"
        style={removeStyle}>
        ×
      </button>
    </span>
  )
}
