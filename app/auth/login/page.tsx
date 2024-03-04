"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });

      if (response.data.success ) {
        console.log("Login successful");
        localStorage.setItem("token", response.data.token)
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col border border-slate-800 rounded-xl p-4 gap-2">
        <h1 className="text-center text-2xl font-bold">LOGIN</h1>
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
          Log in
        </button>
      </form>
    </div>
  );
}
