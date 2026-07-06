'use client'

import { columns } from '../components/meetingColumns'
import { rowColumns } from '@/ui/molecules/rowColumns'

// Meeting-table columns with a leading select-all checkbox column.
export function useMeetingColumns(selection) {
  return rowColumns(columns, { selection })
}
