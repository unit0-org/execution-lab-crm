// `plain` rows (e.g. loading skeletons) opt out of the row hover effect.
// `onClick` makes the row a clickable target (pointer cursor).
export function Tr({ plain, onClick, children }) {
  const flag = plain || undefined
  const clickable = onClick ? '' : undefined

  return (
    <tr data-plain={flag} data-clickable={clickable} onClick={onClick}>
      {children}
    </tr>
  )
}
