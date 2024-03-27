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
        <div className="border-b pb-2 border-slate-800 select-none">
          <div className="pb-4 pt-8 flex gap-5">
            <img
              className="w-28 rounded-full"
              src={data.user.image}
              alt="user"
            />
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-2xl font-extrabold">{data.user.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">@{data.user.username}</p>
                {data.user.verified && (
                  <span className="text-2xl">
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
          <div className="py-2">
            <p className="text-slate-400">
              joined {data.user.since.substring(0, 10)}
            </p>
          </div>
          <div className="flex gap-4 divide-x-2 divide-gray-600">
            <div className="flex gap-2">
              <p>{data.user.followers}</p>
              <p>followers</p>
            </div>
            <div className="flex gap-2 pl-4">
              <p>{data.user.following}</p>
              <p>following</p>
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
