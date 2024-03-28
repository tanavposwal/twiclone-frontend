"use client";
import { useRecoilState } from "recoil";
import { loginState } from "@/recoil/recoilState";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FollowBtn({ user }: { user: string }) {
  const [logged, setLogged] = useRecoilState(loginState);
  const [loading, setLoading] = useState<boolean>(true);
  const [follower, setFollower] = useState(false);

  async function Follow() {
    try {
      setLoading(true)
      const res = await axios.get(`https://twiclone-api-production.up.railway.app/user/${user}/follow`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setLoading(false)  
      setFollower(true);
    } catch (err) {
      console.log(err);
    }
  }
  async function UnFollow() {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://twiclone-api-production.up.railway.app/user/${user}/unfollow`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      setLoading(false)
      setFollower(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function load() {
    setLoading(true)
    const res = await axios.get(
      `https://twiclone-api-production.up.railway.app/user/${user}/followstat`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log("calls load()")
    setLoading(false)
    setFollower(res.data.present);
  }

  useEffect(()=> {
    load()
  }, [])

  return (
    <div>
      {logged && (
        <div className={""+(loading && "opacity-50")}>
          {follower ? (
            <div>
              <button
                className="px-4 py-1 bg-red-500 text-black font-semibold rounded-full hover:bg-red-400 transition"
                disabled={loading}
                onClick={() => {UnFollow()}}
              >
                Unfollow
              </button>
            </div>
          ) : (
            <div>
              <button
                className="px-4 py-1 bg-white rounded-full text-black hover:bg-slate-300 transition font-semibold"
                disabled={loading}
                onClick={() => {Follow()}}
              >
                Follow
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
