import {
  rowStyle, regularStyle, priceStyle, currencyStyle
} from './PriceTag.styles'

// Strikethrough regular price only when there is one to show.
function Regular({ value, size }) {
  if (!value) return null

  return <span style={regularStyle(size)}>{value}</span>
}

// A price line: optional struck regular, the price, and a currency code.
// Amounts are pre-formatted strings (e.g. "$1,500"); `size` is in px.
export function PriceTag({ price, regular, currency = 'CAD', size = 30 }) {
  return (
    <div style={rowStyle}>
      <Regular value={regular} size={size} />
      <span style={priceStyle(size)}>{price}</span>
      <span style={currencyStyle}>{currency}</span>
    </div>
  )
}
