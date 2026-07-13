import { MonoLink } from './MonoLink'

const meta = {
  title: 'Atoms/MonoLink',
  component: MonoLink,
  args: { href: 'https://example.com', children: 'example.com' }
}

export default meta

// External by default — opens in a new tab.
export const External = {}

export const Underlined = { args: { underline: true } }

export const Internal = {
  args: { external: false, href: '#', children: 'in-app link' }
}
