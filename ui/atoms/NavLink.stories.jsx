import { NavLink } from './NavLink'
import { Stack } from '../layout/Stack'

const meta = {
  title: 'Atoms/NavLink',
  component: NavLink,
  args: { href: '#', icon: 'users', children: 'Contacts' }
}

export default meta

export const Default = {}

export const Active = { args: { active: true } }

export const Group = {
  render: () => (
    <Stack gap="xs">
      <NavLink href="#" icon="users" active>Contacts</NavLink>
      <NavLink href="#" icon="calendar">Meetings</NavLink>
      <NavLink href="#" icon="gear">Settings</NavLink>
    </Stack>
  )
}
