'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { mergeMeetingsAction } from '../actions/mergeMeetings'
import { dismissSuggestionAction } from '../actions/dismissSuggestion'

export function useSuggestionActions(suggestion, onChanged) {
  const merge = () =>
    mergeMeetingsAction(suggestion.google.id, [suggestion.manual.id])
      .then(() => {
        showToast('Meetings merged')
        onChanged()
      })

  const dismiss = () =>
    dismissSuggestionAction(suggestion.id).then(onChanged)

  return { merge, dismiss }
}
