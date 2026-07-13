import { CopyText } from './CopyText'
import { CollapsibleCopyList } from './CollapsibleCopyList'

/**
 * Copy-to-clipboard list: comma-separated values, each click-to-copy.
 * `collapse` shows the first value + a "+N more" toggle for tight
 * columns instead.
 */
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
