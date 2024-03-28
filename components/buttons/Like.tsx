"use client";
import axios from "axios";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function Like({ hash, ulike }: { hash: string, ulike: boolean }) {
    const [liked, setLiked] = useState(ulike)

  async function like() {
    const req = await axios.get(
      `https://twiclone-api-production.up.railway.app/post/${hash}/like`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = req.data;
    if (data.success) {
      setLiked(!liked)
    }
  }

  return (
    <button
      className="text-xl hover:scale-125 transition"
      onClick={() => like()}
    >
      {liked ? <FiHeart className="stroke-red-500 fill-red-500" /> : <FiHeart className="stroke-slate-400 fill-slate-400" />}
      
    </button>
  );
}
