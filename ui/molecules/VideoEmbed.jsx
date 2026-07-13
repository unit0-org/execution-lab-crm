import { wrapStyle, frameStyle } from './VideoEmbed.styles'

const ALLOW = 'accelerometer; clipboard-write; encrypted-media; '
  + 'picture-in-picture; web-share'

/**
 * Responsive 16:9 embedded video player — cohort recordings. `src` is an
 * embed URL, e.g. from `youtubeEmbedUrl`.
 */
export function VideoEmbed({ src, title }) {
  return (
    <div style={wrapStyle}>
      <iframe src={src} title={title} style={frameStyle}
        allow={ALLOW} allowFullScreen />
    </div>
  )
}
