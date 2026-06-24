import { Stack } from '@/ui/layout/Stack'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { VideoEmbed } from '@/ui/molecules/VideoEmbed'
import { youtubeEmbedUrl } from '@/lib/youtube/embedUrl'

// A recording: an inline player when it's an embeddable YouTube link,
// with the title kept as a link to open it on YouTube.
export function RecordingItem({ item }) {
  const src = youtubeEmbedUrl(item.url)

  if (!src)
    return <MonoLink href={item.url} size={13}>{item.title}</MonoLink>

  return (
    <Stack gap="xs">
      <MonoLink href={item.url} size={13}>{item.title}</MonoLink>
      <VideoEmbed src={src} title={item.title} />
    </Stack>
  )
}
