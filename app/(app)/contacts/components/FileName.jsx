import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { Text } from '@/ui/atoms/Text'

// The file name as a download link; plain text if no URL was signed.
export function FileName({ file }) {
  if (!file.downloadUrl)
    return <Text gutter="none">{file.fileName}</Text>

  return (
    <ExternalLink href={file.downloadUrl}>{file.fileName}</ExternalLink>
  )
}
