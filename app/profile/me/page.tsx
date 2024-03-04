'use client';

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {

    const [data, setData] = useState<{
        success: boolean,
        user: {
            name: string,
            username: string,
            since: string,
            bio: string,
            followers: string,
            following: string,
        }
    }>({
        success: false,
        user: {
            name: "loading...",
            username: "",
            since: "",
            bio: "",
            followers: "",
            following: "",
        }
    })
    
    useEffect(() => {
        reload()
    }, [])

    function reload(){
        const token = localStorage.getItem("token")
        axios.get('http://localhost:3001/user/me', {headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }}).then(req => setData(req.data))
    }
  
    return (
        <div className="px-5 mt-4">
        <div className="my-2">
          <button className="text-sm">{'<'} back</button>
        </div>
        <div className="border-b pb-2 border-slate-800 select-none">
          <div className="pb-4 pt-8 flex gap-5">
            <img className="w-28 rounded-full" src="https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg" alt="user" />
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-2xl font-extrabold">{data.user.name}</p>
              <p className="text-lg font-extrabold">{data.user.username}</p>
              <p className="text-md font-semibold text-slate-300">{data.user.bio}</p>
            </div>
          </div>
          <div className="py-2">
            <p className="text-slate-400">
              joined {data.user.since.substring(0,10)}
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
      </div>
    );
  }