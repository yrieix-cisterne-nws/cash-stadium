import CashGen from "../components/cash_gen"
import { query } from "@/lib/db"

export default async function TankPage() {
  let tank = []

  try {
    tank = await query('SELECT * FROM tank')
  } catch (err) {
    console.error('Error fetching tank')
  }

  return(
    <>
      <CashGen title="Tank" heroes={tank} />
    </>
  ) 
}