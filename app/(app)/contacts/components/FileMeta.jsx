import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { formatFileSize } from './formatFileSize'

// Size and upload date under the file name.
export function FileMeta({ file }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm">{formatFileSize(file.sizeBytes)}</Text>
      <Text tone="muted" size="sm">
        <DateText value={file.createdAt} withTime />
      </Text>
    </Inline>
  )
}
