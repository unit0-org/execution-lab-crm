'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useOfferComments } from '../hooks/useOfferComments'
import { AddCommentModal } from './AddCommentModal'
import { CommentList } from './CommentList'

// The offer's comment thread (oldest first) with a + to add a comment.
export function OfferCommentsSection(props) {
  const { offerId, initial, audience, viewerContactId } = props
  const { comments, reload } = useOfferComments(offerId, initial)
  const add = useToggle()
  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <SectionHeader title="Comments" addLabel="Add comment"
        onAdd={add.show} />
      <AddCommentModal open={add.open} offerId={offerId} audience={audience}
        onSaved={saved} onClose={add.hide} />
      <CommentList comments={comments} viewerContactId={viewerContactId}
        onChanged={reload} />
    </Stack>
  )
}
