import CashGen from "../components/cash_gen"
import { query } from "@/lib/db"

export default async function SupportPage() {
  let support = []

  try {
    support = await query('SELECT * FROM support')
  } catch (err) {
    console.error('Error fetching support')
  }

  return(
    <>
      <CashGen title="Support" heroes={support} />
    </>
  ) 
}