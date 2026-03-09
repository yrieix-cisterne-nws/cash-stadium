import Link from "next/link";

export default function Header() {
    
  return (
    <header className="bg-[#0D1117] flex flex-row justify-between px-4 py-2">
        <div className="">
            <Link href="/" className="text-white hover:text-gray-300">Stadium Cash</Link>
        </div>
        <div>
            <nav className="flex space-x-4">
                <Link href="/tank" className="text-white hover:text-gray-300">Tank</Link>
                <Link href="/dps" className="text-white hover:text-gray-300">Dps</Link>
                <Link href="/support" className="text-white hover:text-gray-300">Support</Link>
            </nav>
        </div>
    </header>
  );
}