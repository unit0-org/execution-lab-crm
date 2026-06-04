import { showToast } from './toastBus'

// Returns a function that copies text and confirms with a toast.
export function useClipboard() {
  return (text) => {
    navigator.clipboard.writeText(text)
    showToast('Copied to clipboard')
  }
}
