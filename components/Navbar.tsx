import Link from "next/link"
import Me from "./buttons/Me"

export default function Navbar() {
    return (
        <nav className="shadow-lg text-xl font-bold py-3 select-none flex justify-center fixed top-0 left-0 right-0 bg-transparent backdrop-blur-xl backdrop-brightness-[30%] h-16 border-b border-slate-800">
            <div className="flex-1 flex items-center justify-center  bg-transparent">
            <Link className="bg-transparent" href="/">Micro Blog</Link>
            </div>
            <div className="h-full w-fit flex items-center justify-center px-4 mr-3 bg-transparent absolute right-0 top-0">
                <Me />
            </div>
        </nav>
    )
}