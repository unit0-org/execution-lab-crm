// Badge tone/label + detail line for a Drive-upload result.
export function outcomeView(result) {
  if (result.ok) {
    return {
      tone: 'success',
      label: 'Uploaded',
      detail: 'The invoice PDF was filed in the Drive folder.'
    }
  }

  return { tone: 'error', label: 'Failed', detail: result.error }
}
