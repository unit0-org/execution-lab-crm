'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { CommentHead } from './CommentHead'

// One comment: author + date on top (with a delete control on my own), then
// the body text.
export function CommentCard({ comment, viewerContactId, onChanged }) {
  return (
    <Card>
      <Stack gap="xs">
        <CommentHead comment={comment} onChanged={onChanged}
          viewerContactId={viewerContactId} />
        <Text gutter="none">{comment.body}</Text>
      </Stack>
    </Card>
  )
}
