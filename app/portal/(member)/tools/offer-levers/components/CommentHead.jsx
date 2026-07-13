'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { CommentDelete } from './CommentDelete'

const authorName = (comment) => comment.authorName || 'Someone'

// A comment's meta row: author + timestamp, with a delete control shown only
// on my own comments.
export function CommentHead({ comment, viewerContactId, onChanged }) {
  return (
    <GrowRow>
      <Inline gap="sm">
        <Text size="sm" gutter="none">{authorName(comment)}</Text>
        <DateText value={comment.createdAt} withTime />
      </Inline>
      <CommentDelete ownerId={comment.authorContactId}
        viewerId={viewerContactId} commentId={comment.id}
        onChanged={onChanged} />
    </GrowRow>
  )
}
