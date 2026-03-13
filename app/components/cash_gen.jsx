export default function CashGen({ title, heroes }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-white font-bold mb-8">{title}</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#1C2A35] p-4 rounded-lg border-white/5 border-2 text-white">
            <th className=""></th>
            <th className="p-2">Cash per Dmg on Squishie</th>
            <th className="p-2">Cash per Dmg on Tank</th>
            <th className="p-2">Cash per Self-Heal</th>
            <th className="p-2">Cash per Heal on Squishie</th>
            <th className="p-2">Cash per Heal on Tank</th>
          </tr>
        </thead>
        <tbody className="">
          {heroes.map((hero) => (
            <tr key={hero.id} className="bg-[#1C2A35] p-4 rounded-lg border-white/5 border-2 text-white">
              <td className="">
                <img src={hero.image} alt={hero.name} className="w-16 h-16" />
              </td>
              <td className="p-2 text-white text-center border-x-2 border-gray-700">{hero.dmgSquishie ?? 'IMPOSSIBLE'}</td>
              <td className="p-2 text-white text-center border-x-2 border-gray-700">{hero.dmgTank ?? 'IMPOSSIBLE'}</td>
              <td className="p-2 text-white text-center border-x-2 border-gray-700">{hero.selfHeal ?? 'IMPOSSIBLE'}</td>
              <td className="p-2 text-white text-center border-x-2 border-gray-700">{hero.healSquishie ?? 'IMPOSSIBLE'}</td>
              <td className="p-2 text-white text-center border-x-2 border-gray-700">{hero.healTank ?? 'IMPOSSIBLE'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}