// `plain` rows (e.g. loading skeletons) opt out of the row hover effect.
export function Tr({ plain, children }) {
  const flag = plain || undefined

  return <tr data-plain={flag}>{children}</tr>
}
