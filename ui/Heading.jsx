import { headingStyle } from './Heading.styles'

const TAGS = { 1: 'h1', 2: 'h2', 3: 'h3' }

export function Heading({ level = 1, gutter = 'md', children }) {
  const Tag = TAGS[level]
  return <Tag style={headingStyle(level, gutter)}>{children}</Tag>
}
