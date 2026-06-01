import { hamburgerStyle } from './Hamburger.styles'

export function Hamburger({ onClick }) {
  return (
    <button
      type="button"
      data-hamburger
      onClick={onClick}
      aria-label="Menu"
      style={hamburgerStyle}
    >
      ☰
    </button>
  )
}
