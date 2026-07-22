import { Company } from '@/lib/company/models'

// Create a company from the given fields. Returns { id }.
export async function createCompany(data) {
  try {
    const company = await Company.create(data)

    return { id: company.id }
  } catch (e) {
    return { error: e.message }
  }
}
