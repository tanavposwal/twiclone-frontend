import axios from "axios";
import Link from "next/link";

export default async function Post({ post }: {post: any}) {
    let info = {
      verified: false,
      image: "",
    }
    const res = await axios.get(
      `http://localhost:3001/user/${post.username}/info`
    );
    info = res.data
  }

  return (
    <div>
      <div className="pt-2 font-bold flex gap-3 items-center">
        <img
          className="w-8 h-8 rounded-full"
          src={info.image}
          alt="profile"
        />
        <div className="flex gap-2 items-center">
          <Link href={"/profile/id/" + post.username}>
            {post.author}
          </Link>
          {info.data.verified && (
            <span className="text-lg">
              <HiBadgeCheck className="fill-blue-500" />
            </span>
          )}
        </div>
      </div>
      <div className="my-2 text-lg">{data.post.content}</div>
      {data.post.image && (
        <div className="w-full flex items-center justify-center">
          <img
            src={data.post.image}
            className="aspect-auto border border-slate-600 rounded-lg max-h-48"
            alt=""
          />
        </div>
      )}

      <div className="text-sm text-slate-400 py-2">
        {data.post.likes} likes | {data.post.time.substring(0, 10)}
      </div>
      <div className="py-3 border-t border-slate-700 flex justify-evenly">
        <Like hash={params.hash} />
        <button className="text-green-400 text-xl">
          <FiMessageCircle />
        </button>
      </div>
    </div>
  );
}
