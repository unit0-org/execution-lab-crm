import { GrowRow } from '@/ui/layout/GrowRow'
import { PageActions } from '@/ui/molecules/PageActions'

/**
 * A detail page's header: the `title` node on the left (heading, status,
 * subtitle — whatever the page needs) and its `actions` as a `PageActions`
 * cluster top-right. Use on every single-entity page so their headers line
 * up and their action rows behave the same.
 */
export function PageHeader({ title, actions }) {
  return (
    <GrowRow align="start">
      {title}
      <PageActions>{actions}</PageActions>
    </GrowRow>
  )
}
