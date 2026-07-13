import { NavIcon } from './NavIcon'
import { Inline } from '../layout/Inline'

const meta = {
  title: 'Atoms/NavIcon',
  component: NavIcon,
  args: { icon: 'users' }
}

export default meta

export const Default = {}

// The cog is a custom SVG, not an Icon.paths glyph.
export const Gear = { args: { icon: 'gear' } }

export const Both = {
  render: () => (
    <Inline>
      <NavIcon icon="users" />
      <NavIcon icon="gear" />
    </Inline>
  )
}
