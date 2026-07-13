import { Stack } from '@/ui/layout/Stack'
import { EmptyState } from '@/ui/molecules/EmptyState'
import { CommentCard } from './CommentCard'

// The comment thread, oldest first; an empty state when there are none.
export function CommentList({ comments, viewerContactId, onChanged }) {
  if (!comments.length)
    return (
      <EmptyState title="No comments yet"
        message="Start the discussion with the first comment." />
    )

  return (
    <Stack gap="sm">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} onChanged={onChanged}
          viewerContactId={viewerContactId} />
      ))}
    </Stack>
  )
}
