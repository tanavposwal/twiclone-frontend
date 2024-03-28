import { FaSpinner } from "react-icons/fa";

export default async function Loading() {
    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <FaSpinner className="text-white fill-white animate-spin text-2xl" />
        </div>
    )
}