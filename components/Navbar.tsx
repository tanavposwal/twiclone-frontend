import Link from "next/link"
import Me from "./buttons/Me"


export default function Navbar() {
    return (
        <nav className="border-slate-700 text-xl font-bold py-3 select-none flex justify-center fixed top-0 left-0 right-0 nav bg-transparent backdrop-blur-lg backdrop-brightness-50 h-16">
            <div className="flex-1 flex items-center justify-center  bg-transparent">
            <Link className="bg-transparent" href="/">Micro Blog</Link>
            </div>
            <div className="h-full w-fit flex items-center justify-center px-4 mr-3 bg-transparent">
                <Me />
            </div>
        </nav>
    )
}