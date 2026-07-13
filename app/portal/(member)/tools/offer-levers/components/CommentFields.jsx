import { MentionField } from '@/ui/molecules/MentionField'

// The comment composer: a textarea with @-mention tagging over the offer's
// audience. Submits the text as `body` and picked ids as `mention_contact_ids`.
export function CommentFields({ options = [] }) {
  return (
    <MentionField label="Comment" name="body" idsName="mention_contact_ids"
      options={options} rows={4} required
      placeholder="Write a comment — type @ to tag someone" />
  )
}
