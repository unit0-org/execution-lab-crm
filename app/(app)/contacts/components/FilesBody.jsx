import { FileList } from './FileList'

// The list of attachments, which handles its own empty case.
export function FilesBody({ files, onDelete }) {
  return <FileList files={files} onDelete={onDelete} />
}
