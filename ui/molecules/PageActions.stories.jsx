import { PageActions } from './PageActions'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Molecules/PageActions',
  component: PageActions
}

export default meta

export const Default = {
  render: () => (
    <PageActions>
      <Button size="sm" tone="primary">Edit</Button>
      <Button size="sm">Download PDF</Button>
    </PageActions>
  )
}
