import { TableHead, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'

export function LabelsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader>Label</TableHeader>
        <TableHeader>Color</TableHeader>
        <TableHeader align="right">Actions</TableHeader>
      </TableRow>
    </TableHead>
  )
}
