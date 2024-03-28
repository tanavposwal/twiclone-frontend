import Back from "@/components/Back";
import FollowBtn from "@/components/buttons/FollowBtn";
import axios from "axios";
import { HiBadgeCheck } from "react-icons/hi";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  let data;
  try {
    const res = await axios.get(
      `https://twiclone-api-production.up.railway.app/user/id/${params.username}`
    );
    data = res.data;
  } catch (err) {
    data = { success: false };
  }

  return (
    <div className="px-5 mt-4">
      <div className="my-2">
        <Back />
      </div>
      {data.success ? (
        <div className="border-b pb-2 px-6 border-slate-800 select-none">
          <div className="pb-4 pt-8 flex flex-col gap-3">
            <img
              className="w-28 rounded-full"
              src={data.user.image}
              alt="user"
            />
            <div className="flex">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-2xl font-extrabold">{data.user.name}</p>
              <div className="flex items-center gap-1">
                <p className="text-md font-medium">@{data.user.username}</p>
                {data.user.verified && (
                  <span className="text-xl">
                    <HiBadgeCheck className="fill-blue-500" />
                  </span>
                )}
              </div>
              <p className="text-md font-semibold text-slate-300">
                {data.user.bio}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FollowBtn user={params.username} />
            </div>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-slate-400">
              joined {data.user.since.substring(0, 10)}
            </p>
          </div>
          <div className="flex gap-2 divide-slate-400 text-sm text-slate-400">
            <div className="flex gap-2 text-slate-400">
              <p className="text-slate-400">{data.user.followers}</p>
              <p className="text-slate-400">followers</p>
            </div>
            <p className="text-slate-400">•</p>
            <div className="flex gap-2 text-slate-400">
              <p className="text-slate-400">{data.user.following}</p>
              <p className="text-slate-400">following</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-56 w-full flex items-center justify-center">
          User not found
        </div>
      )}
    </div>
  );
}
