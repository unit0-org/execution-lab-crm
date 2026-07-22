// Carries the company id into the edit form's FormData (absent on create).
export function CompanyIdInput({ company }) {
  if (!company?.id) return null

  return <input type="hidden" name="id" defaultValue={company.id} />
}
