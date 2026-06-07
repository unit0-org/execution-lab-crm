import { TextButton } from '@/ui/atoms/TextButton'

export function ManageLabelsButton({ onClick }) {
  return (
    <TextButton type="button" onClick={onClick}>Manage labels</TextButton>
  )
}
