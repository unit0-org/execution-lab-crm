import { CopyText } from './CopyText'

// Comma-separated values, each individually click-to-copy. The commas
// come from a CSS rule on [data-comma-list] (see globals.css).
export function CopyList({ values }) {
  return (
    <span data-comma-list>
      {values.map((v) => <CopyText key={v} value={v}>{v}</CopyText>)}
    </span>
  )
}
