import { Stack } from '@/ui/layout/Stack'
import { CommentCard } from './CommentCard'

// The comment thread, oldest first. Renders nothing until there's a comment —
// the section's + is prompt enough.
export function CommentList({ comments, viewerContactId, onChanged }) {
  if (!comments.length) return null

  return (
    <Stack gap="sm">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} onChanged={onChanged}
          viewerContactId={viewerContactId} />
      ))}
    </Stack>
  )
}
