"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { loginState } from '@/recoil/recoilState';

export default function Me() {
  const [logged, setLogged] = useRecoilState(loginState);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="bg-transparent">
      {logged ? (
        <Link href={"/profile/me"} className=" bg-transparent">
          <FaUserCircle className="text-3xl fill-blue-400 hover:fill-blue-500 transition  bg-transparent" />
        </Link>
      ) : (
        <Link className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-600 transition font-normal text-sm" href="/auth/login">
          Login
        </Link>
      )}
    </div>
  );
}
