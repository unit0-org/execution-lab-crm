import { listPurchasesAction } from './actions/listPurchases'
import { PurchasesView } from './components/PurchasesView'

export async function PurchasesServer({ searchParams }) {
  const { window } = await searchParams
  const purchases = await listPurchasesAction(window)

  return <PurchasesView initialPurchases={purchases} />
}
