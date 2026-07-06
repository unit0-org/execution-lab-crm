'use client'

import { removeMemberAction } from '../actions/removeMember'

export function useRemoveMember(id, onDone) {
  return () => removeMemberAction(id).then(onDone)
}
