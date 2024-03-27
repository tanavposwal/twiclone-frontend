"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRecoilState } from 'recoil';
import { loginState } from '@/recoil/recoilState';

export default function Home() {
  const [logged, setLogged] = useRecoilState(loginState);
  const [displayname, setDisplayname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://twiclone-api-production.up.railway.app/user/register", {
        displayName: displayname,
        username,
        password,
      });
      if (response.data.success) {
        console.log("Login successful");
        localStorage.setItem("token", response.data.token)
        setLogged(true)
        router.push("/")
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <form className="flex flex-col border border-slate-800 rounded-xl p-4 gap-2" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">REGISTER</h1>
        <input
          className="outline-none ring-2 px-2 py-1 rounded"
          type="text"
          name=""
          placeholder="display name"
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
        />
        <input
          className="outline-none ring-2 px-2 py-1 rounded"
          type="text"
          name=""
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="outline-none ring-2 px-2 py-1 rounded"
          type="text"
          name=""
          id=""
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition" type="submit">
          Create new account
        </button>
        <p className="opacity-65">
          already registered <Link className="text-blue-500 underline" href="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
