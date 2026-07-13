import { ButtonLink } from './ButtonLink'

const meta = {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
  args: { href: '#', children: 'Open portal' }
}

export default meta

export const Default = {}

export const Primary = { args: { tone: 'primary' } }

export const NewTab = { args: { tone: 'primary', target: '_blank' } }
