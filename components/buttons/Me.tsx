"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IoLogIn } from "react-icons/io5";
import { loginState } from "@/recoil/recoilState";
import axios from "axios";

export default function Me() {
  const [logged, setLogged] = useRecoilState(loginState);
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>("");
  const [verify, setVerify] = useState<boolean>(false);

  async function getInfo() {
    axios.get(
      "https://twiclone-api-production.up.railway.app/user/me/info",
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    ).then(res=> {
      setLoading(false)
      setImage(res.data.image)
      if (res.data.verified) {
        setVerify(true)
      } else {
        setVerify(false)
      }
    })
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogged(true);
      getInfo()
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="bg-transparent">
      {logged ? (
        <div className="bg-transparent">
        {verify ? (<Link href={"/profile/me"} className="bg-gradient-to-br
        from-purple-600 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
          {loading ?
            <div className="w-8 h-8 rounded-full bg-slate-800 animate-pulse"></div> :
            <img className="w-8 h-8 rounded-full ring-2 ring-black" src={image} /> 
            }
        </Link>) : 
          (<Link href={"/profile/me"} className="w-10 h-10 rounded-full flex items-center justify-center">
          {loading ?
            <div className="w-8 h-8 rounded-full bg-slate-800 animate-pulse"></div> :
            <img className="w-8 h-8 rounded-full ring-2 ring-black" src={image} /> 
            }
        </Link>)
        }
        </div>
        
      ) : (
        <Link
          className="group px-2 pr-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-xl flex"
          href="/auth/login"
        >
          <p className="bg-transparent"><IoLogIn className="bg-transparent" /></p>
          <span className="absolute scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 top-16 right-3 bg-gray-600/90 rounded text-white px-3 py-2 text-sm transition-opacity">Login</span>
        </Link>
      )}
    </div>
  );
}
