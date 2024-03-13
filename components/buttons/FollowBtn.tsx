"use client";
import { useRecoilState } from "recoil";
import { loginState } from "@/recoil/recoilState";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FollowBtn({ user }: { user: string }) {
  const [logged, setLogged] = useRecoilState(loginState);
  const [follower, setFollower] = useState(false);
  async function Follow() {
    try {
      const res = await axios.get(`http://localhost:3001/user/${user}/follow`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setFollower(true);
    } catch (err) {
      console.log(err);
    }
  }
  async function UnFollow() {
    try {
      const res = await axios.get(
        `http://localhost:3001/user/${user}/unfollow`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      setFollower(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function load() {
    const res = await axios.get(
      `http://localhost:3001/user/${user}/followstat`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    setFollower(res.data.present);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      {logged && (
        <div>
          {follower ? (
            <div>
              <button
                className="px-4 py-1 bg-red-500 rounded-full text-white hover:bg-red-400 transition"
                onClick={() => {UnFollow()}}
              >
                Unfollow
              </button>{" "}
            </div>
          ) : (
            <div>
              <button
                className="px-4 py-1 bg-white rounded-full text-black hover:bg-slate-300 transition"
                onClick={() => {Follow()}}
              >
                Follow
              </button>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
