import { CopyText } from './CopyText'
import { CollapsibleCopyList } from './CollapsibleCopyList'

// Comma-separated values, each individually click-to-copy (commas from a
// CSS rule on [data-comma-list], see globals.css). With `collapse`, shows
// the first value + a "+N more" toggle for tight columns instead.
export function CopyList({ values, collapse }) {
  if (collapse && values.length > 1) {
    return <CollapsibleCopyList values={values} />
  }

  return (
    <span data-comma-list>
      {values.map((v) => <CopyText key={v} value={v}>{v}</CopyText>)}
    </span>
  )
}
