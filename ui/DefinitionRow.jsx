import { DefTerm, DefDescription } from './DefinitionList'

// Convenience: emit a <dt> + <dd> pair as one logical row.
export function DefinitionRow({ term, children }) {
  return (
    <>
      <DefTerm>{term}</DefTerm>
      <DefDescription>{children}</DefDescription>
    </>
  )
}
