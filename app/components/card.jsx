import Link from "next/link"

const colorRole = {
    "tank": "text-[#00A2FF]",
    "dps": "text-[#FF4655]",
    "support": "text-[#40FFB3]"
}

export default function Card({role, text, color}) {
    return(
        <Link href={`/${role}`}>
        <div className="bg-[#1A2230] p-4 rounded-lg border-white/5 border-2 text-white">
            <h2 className="text-3xl mb-2 uppercase ">{role}</h2>
            <div className="flex flex-col gap-2">
                <p className="text-slate-400">{text}</p>
                <p className={colorRole[color]}>Explore stats</p>
            </div>
        </div>
        </Link>
    )
}