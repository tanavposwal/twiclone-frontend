"use client";

import Back from "@/components/Back";
import axios from "axios";
import { useState, useEffect } from "react";
import { HiBadgeCheck } from "react-icons/hi";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    success: boolean;
    user: {
      name: string;
      username: string;
      since: string;
      bio: string;
      followers: string;
      following: string;
      verified: boolean;
    };
  }>({
    success: false,
    user: {
      name: "",
      username: "",
      since: "",
      bio: "",
      followers: "",
      following: "",
      verified: false,
    },
  });

  useEffect(() => {
    reload();
  }, []);

  function reload() {
    axios
      .get("https://twiclone-api-production.up.railway.app/user/me", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((req) => {
        setData(req.data);
        setLoading(false);
      });
  }

  return (
    <div className="px-5 mt-4">
      <div className="my-2">
        <Back />
      </div>

      <div className="border-b pb-2 border-slate-800 select-none">
        <div className="pb-4 pt-8 flex gap-5">
          {loading ? (
            <div className="w-28 h-28 rounded-full animate-pulse bg-slate-800"></div>
          ) : (
            <img
              className="w-28 rounded-full"
              src="https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg"
              alt="user"
            />
          )}

          <div className="flex flex-1 flex-col justify-center">
            {loading ? (
              <div className="animate-pulse bg-slate-800 w-48 h-28 rounded-lg mb-2"></div>
            ) : (
              <div>
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
            )}
          </div>
        </div>
        <div className="py-2">
          {loading ? (
            <div className="animate-pulse bg-slate-800 w-48 h-4 rounded-full"></div>
          ) : (
            <p className="text-slate-400">
              joined {data.user.since.substring(0, 10)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
