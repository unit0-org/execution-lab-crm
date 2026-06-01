import { uploadButtonStyle } from './UploadButton.styles'

// A button-styled label wrapping a hidden file input.
export function UploadButton({ label, onPick }) {
  return (
    <label style={uploadButtonStyle}>
      {label}
      <input type="file" accept=".csv" onChange={onPick} hidden />
    </label>
  )
}
