'use client';
import Link from "next/link"
import { useRecoilState } from "recoil";
import { loginState } from "@/recoil/recoilState";

export default function CreatePost() {
    const [logged, setLogged] = useRecoilState(loginState);

    return (
    <div className="fixed bottom-10 right-10 bg-transparent">
        {logged && 
        <Link
          className="bg-blue-500 px-6 py-3 rounded-full hover:shadow-lg hover:bg-blue-600 transition-all"
          href={"/post/create"}
        >
          Write Post
        </Link>}
      </div>
    )
}