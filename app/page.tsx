import axios from "axios";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

export default async function Home() {
  const res = await axios.get(`http://localhost:3001/post/`);
  return (
    <div className="flex flex-col">
      <div className="absolute bottom-10 right-10">
        <Link
          className="bg-blue-500 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 transition-all"
          href={"/post/create"}
        >
          Write Post
        </Link>
      </div>
      <div className="w-full">
        {res.data.post.map((post: any) => (
          <Link href={"/post/hash/" + post.hash} key={post.hash}>
            <div className="w-full border-t border-b border-slate-600 px-8 my-2">
              <div className="pt-2 font-bold flex gap-3 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={"http://picsum.photos/600"}
                  alt="profile"
                />
                <div className="flex gap-2 items-center">
                  <Link href={"/profile/id/" + post.username}>
                    {post.username}
                  </Link>
                  {true && (
                    <span className="text-lg">
                      <HiBadgeCheck className="fill-blue-500" />
                    </span>
                  )}
                </div>
              </div>
              <div className="my-2 text-lg">{post.content}</div>
              {post.image && (
                <div className="w-full flex items-center justify-center border border-slate-600 rounded-lg">
                  <img
                    src={post.image}
                    className="aspect-auto max-h-48"
                    alt="image"
                  />
                </div>
              )}

              <div className="text-sm text-slate-400 py-2">
                {post.likes} likes | {post.comments} comments |{" "}
                {post.timestamp.substring(0, 10)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
