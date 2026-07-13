'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { withOwnership } from '@/ui/hocs/withOwnership'
import { useRemoveComment } from '../hooks/useRemoveComment'

// The delete control for a comment (trash + confirm). Presentational — it
// never checks who may delete; withOwnership gates it to the author.
function CommentDeleteControl({ commentId, onChanged }) {
  const confirm = useToggle()
  const remove = useRemoveComment(onChanged)

  return (
    <>
      <IconButton label="Delete comment" size={28} onClick={confirm.show}>
        <Icon name="trash" size={14} />
      </IconButton>
      <ConfirmDialog open={confirm.open} title="Delete comment?"
        onConfirm={() => remove(commentId)} onCancel={confirm.hide}
        message="This permanently deletes your comment." />
    </>
  )
}

export const CommentDelete = withOwnership(CommentDeleteControl)
