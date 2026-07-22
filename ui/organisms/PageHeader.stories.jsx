import { PageHeader } from './PageHeader'
import { Heading } from '../atoms/Heading'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Organisms/PageHeader',
  component: PageHeader
}

export default meta

const actions = (
  <>
    <Button size="sm" tone="primary">Edit</Button>
    <Button size="sm">Download PDF</Button>
  </>
)

export const Default = {
  render: () => (
    <PageHeader title={<Heading gutter="none">INV-20260722</Heading>}
      actions={actions} />
  )
}
