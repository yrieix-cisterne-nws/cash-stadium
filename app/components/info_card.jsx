export default function Infocard({title, items}) {
    return (
        <div className="bg-[#1A2230] p-4 border-white/5 border-2 text-white max-h-80">
            <h2 className="text-xl font-bold mb-4 underline decoration-[#F99E1A]">{title}</h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="text-slate-400">{item}</li>
                ))}
            </ul>
        </div>
    )
}