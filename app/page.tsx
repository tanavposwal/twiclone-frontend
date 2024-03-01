import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex gap-4">
      <button className="px-4 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition">Create account</button>
      <button className="px-4 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition">Log in</button>
      <button className="px-4 py-2 border-2 border-red-500 rounded-xl hover:bg-red-500 transition">Log out</button>
      <button className="px-4 py-2 bg-white rounded-full text-black hover:bg-slate-300 transition">Write a post</button>
    </div>
    </>
  );
}
