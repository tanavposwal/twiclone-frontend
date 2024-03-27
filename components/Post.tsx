import axios from "axios";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

export default async function Post({ post }: {post: any}) {
    
    let info = {
      verified: false,
      image: "",
    }
    const res = await axios.get(
      `https://twiclone-api-production.up.railway.app/user/${post.username}/info`
    );
    info = res.data



  return (
    <Link href={"/post/hash/" + post.hash} key={post.hash}>
            <div className="w-full border-b border-slate-700 px-5 my-2">
              <div className="pt-2 font-bold flex gap-3 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={info.image}
                  alt="profile"
                />
                <div className="flex gap-2 items-center">
                  <Link href={"/profile/id/" + post.username}>
                    {post.username}
                  </Link>
                  {info.verified && (
                    <span className="text-lg">
                      <HiBadgeCheck className="fill-blue-500" />
                    </span>
                  )}
                </div>
              </div>
              <div className="my-2 text-lg">{post.content}</div>
              {post.image && (
                <div className="w-full flex items-center justify-center border border-slate-700 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    className="aspect-auto max-h-48"
                    alt="image"
                  />
                </div>
              )}

              <div className="text-sm text-slate-500 py-2">
                {post.likes} likes | {post.comments} comments |{" "}
                {post.timestamp.substring(0, 10)}
              </div>
            </div>
          </Link>
  );
}
