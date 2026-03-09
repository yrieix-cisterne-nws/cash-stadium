import Link from "next/link"

export default function Card({role, text}) {
    return(
        <Link href={`/${role}`}>
        <div className="bg-[#1A2230] p-4 rounded-lg border-white/5 border-2 text-white">
            <h2 className="text-3xl mb-2 uppercase ">{role}</h2>
            <div className="flex flex-col gap-2">
                <p className="text-slate-400">{text}</p>
                <p className="text-slate-400">Explore stats</p>
            </div>
        </div>
        </Link>
    )
}