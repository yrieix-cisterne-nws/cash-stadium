import Card from "./components/card"
import Infocard from "./components/info_card"

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl">Stadium Cash generation</h1>
        <p className="text-white">This website group the cash generation of every heroes available in Stadium</p>
      </div>
      <div>
        <h2 className="text-white">Any questions ?</h2>
        <a href="https://discord.gg/stadiumbuildsio" target="_blank" rel="noopener noreferrer" className="text-white">Join the SBIO Discord</a>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-4">
          <Card role="tank" text="Here's the cash generation for the Tanks in Stadium"/>
          <Card role="dps" text="Here's the cash generation for the Dps in Stadium"/>
          <Card role="support" text="Here's the cash generation for the Supports in Stadium"/>
        </div>
        <div className="flex flex-row gap-4">
          <Infocard title="What we discovered" items={["- Attack Speed, Weapon Power and Ability Power does not affect cash generation", "- Damage on tanks generate 40% less cash", "- Healing on tanks generate 30% less cash", "- Cash per damage is the same for healing", "- Overhealth does reduce cash generation (Thanks to Bird for the info)", "- Stadium Quickplay gives +25% cash per damage"]}/>
          <Infocard title="How we got the values" items={["- 10k or 20k dmg and healing to get an accurate value (against a squishie and a tank)", "- Smaller amounts of self-healing in order to confirm guesses", "- Eliminating players to see how bounties work", "- Saving players to see if that would award cash", "- The stats are cash per damage/heal"]}/>
        </div>
      </div>
    </div>

    </>
  );
}
