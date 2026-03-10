import CashGen from "../components/cash_gen"
import { query } from "@/lib/db"

export default async function DPSPage() {
  let dps = []

  try {
    dps = await query('SELECT * FROM dps')
  } catch (err) {
    console.error('Error fetching dps')
  }

  return(
    <>
      <CashGen title="DPS" heroes={dps} />
    </>
  ) 
}