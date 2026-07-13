'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useRemoveComment } from '../hooks/useRemoveComment'

// A trash control shown only on my own comment; confirms, then deletes.
export function CommentDelete({ comment, viewerContactId, onChanged }) {
  const confirm = useToggle()
  const remove = useRemoveComment(onChanged)

  if (comment.authorContactId !== viewerContactId) return null

  return (
    <>
      <IconButton label="Delete comment" size={28} onClick={confirm.show}>
        <Icon name="trash" size={14} />
      </IconButton>
      <ConfirmDialog open={confirm.open} title="Delete comment?"
        onConfirm={() => remove(comment.id)} onCancel={confirm.hide}
        message="This permanently deletes your comment." />
    </>
  )
}
