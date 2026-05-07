import { noticeStyle } from './Notice.styles'

export function Notice({ tone = 'success', children }) {
  if (!children) return null

  return <p style={noticeStyle(tone)}>{children}</p>
}
