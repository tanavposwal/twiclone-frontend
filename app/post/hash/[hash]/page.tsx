import Back from "@/components/Back";
import Like from "@/components/buttons/Like";
import axios from "axios";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";

export default async function Page({ params }: { params: { hash: string } }) {
  let info = {
    data: {
      verified: false,
      image: ""
    },
  };
  const req = await axios.get(`https://twiclone-api-production.up.railway.app/post/${params.hash}`);
  const data = req.data;
  if (data.success) {
    info = await axios.get(
      `https://twiclone-api-production.up.railway.app/user/${data.post.author}/info`
    );
  }
  return (
    <div className="border-b border-slate-700 px-5 mt-4">
      <div className="my-2">
        <Back />
      </div>
      {data.success ? (
        <div>
          <div className="pt-2 font-bold flex gap-3 items-center">
            <img
              className="w-8 h-8 rounded-full"
              src={info.data.image}
              alt="profile"
            />
            <div className="flex gap-2 items-center">
              <Link href={"/profile/id/" + data.post.author}>
                {data.post.author}
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
            <div className="w-full flex items-center justify-center border border-slate-600 rounded-lg">
              <img
                src={data.post.image}
                className="aspect-auto max-h-48"
                alt=""
              />
            </div>
          )}

          <div className="text-sm text-slate-600 py-2">
            {data.post.likes} likes | {data.post.time.substring(0, 10)}
          </div>
          <div className="py-3 border-t border-slate-700 flex justify-evenly">
            <Like hash={params.hash} />
            <button className="text-green-400 text-xl">
              <FiMessageCircle />
            </button>
          </div>
        </div>
      ) : (
        <div className="h-56 w-full flex items-center justify-center">
          Post not found
        </div>
      )}
    </div>
  );
}
