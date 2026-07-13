import { FileField } from './FileField'

const meta = {
  title: 'Atoms/FileField',
  component: FileField,
  args: { label: 'Attach a receipt' }
}

export default meta

export const Default = {}

export const ImagesOnly = { args: { accept: 'image/*' } }
