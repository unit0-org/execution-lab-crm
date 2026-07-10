import { CardGrid } from '@/ui/layout/CardGrid'
import { FileCard } from './FileCard'

export function FileList({ files, onDelete }) {
  return (
    <CardGrid align="start">
      {files.map((file) => (
        <FileCard key={file.id} file={file} onDelete={onDelete} />
      ))}
    </CardGrid>
  )
}
