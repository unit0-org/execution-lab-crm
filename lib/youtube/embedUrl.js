// Convert a YouTube watch/share/embed/shorts URL to its no-cookie embed
// form, or null when no 11-char video id can be parsed.
const ID = /(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/

export function youtubeEmbedUrl(url) {
  const match = url ? url.match(ID) : null

  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
}
