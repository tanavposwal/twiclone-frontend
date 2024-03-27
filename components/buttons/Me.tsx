"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "@/recoil/recoilState";
import axios from "axios";

export default function Me() {
  const [logged, setLogged] = useRecoilState(loginState);
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
        <div>
        {verify ? (<Link href={"/profile/me"} className="bg-gradient-to-br
        from-purple-600 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
          <img className="w-8 h-8 rounded-full ring-2 ring-black" src={image} />
        </Link>) : 
          (<Link href={"/profile/me"} className="w-10 h-10 rounded-full flex items-center justify-center">
          <img className="w-8 h-8 rounded-full ring-2 ring-black" src={image} />
        </Link>)
        }
        </div>
        
      ) : (
        <Link
          className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-600 transition font-normal text-sm"
          href="/auth/login"
        >
          Login
        </Link>
      )}
    </div>
  );
}
