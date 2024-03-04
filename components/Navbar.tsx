import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="border-b border-slate-700 text-xl font-bold py-3 select-none flex justify-center fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg">
            <Link href="/">Micro Blog</Link>
        </nav>
    )
}