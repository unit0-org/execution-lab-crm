import {
  rowStyle, regularStyle, priceStyle, currencyStyle
} from './PriceTag.styles'

// Strikethrough regular price only when there is one to show.
function Regular({ value, size }) {
  if (!value) return null

  return <span style={regularStyle(size)}>{value}</span>
}

/**
 * Price line: optional struck regular + price + currency; takes
 * pre-formatted strings, e.g. "$1,500" (portal). `size` is in px.
 */
export function PriceTag({ price, regular, currency = 'CAD', size = 30 }) {
  if (!price) return null

  return (
    <div style={rowStyle}>
      <Regular value={regular} size={size} />
      <span style={priceStyle(size)}>{price}</span>
      <span style={currencyStyle}>{currency}</span>
    </div>
  )
}
