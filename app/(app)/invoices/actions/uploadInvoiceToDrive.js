'use server'

import { uploadInvoiceToDrive }
  from '@/lib/invoice/controllers/uploadInvoiceToDrive'

export async function uploadInvoiceToDriveAction(id) {
  return uploadInvoiceToDrive(id)
}
