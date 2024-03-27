import Post from "@/components/Post";
import axios from "axios";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

export default async function Home() {
  const res = await axios.get(`https://twiclone-api-production.up.railway.app/post/`);
  return (
    <div className="flex flex-col">
      <div className="fixed bottom-10 right-10 bg-transparent">
        <Link
          className="bg-blue-500 px-6 py-3 rounded-full hover:shadow-lg hover:bg-blue-600 transition-all"
          href={"/post/create"}
        >
          Write Post
        </Link>
      </div>
      <div className="w-full">
        {res.data.post.map((post: any) => (
          <Post post={post} key={post.hash} />
        ))}
      </div>
    </div>
  );
}
