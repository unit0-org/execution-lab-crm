import { Card } from '@/ui/atoms/Card'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { FolderTitle } from './FolderTitle'
import { FolderBody } from './FolderBody'

// A cohort folder as a collapsible card, collapsed by default.
export function CohortFolderCard({ folder, cohortId, onChanged }) {
  return (
    <Card>
      <Collapsible defaultOpen={false}
        title={<FolderTitle name={folder.name} />}>
        <FolderBody folder={folder} cohortId={cohortId}
          onChanged={onChanged} />
      </Collapsible>
    </Card>
  )
}
