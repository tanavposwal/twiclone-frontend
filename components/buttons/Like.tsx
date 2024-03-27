'use client';
import axios from "axios";
import { FiHeart } from "react-icons/fi";

export default function Like({ hash }: {hash: string}) {
    async function like() {
        const req = await axios.get(`https://twiclone-api-production.up.railway.app/post/${hash}/like`, { headers: {
            "authorization": localStorage.getItem('token')
        }});
        const data = req.data;
        if (data.success) {
            alert(data.msg)
        }
    }

    return (
        <button className="text-xl hover:scale-125 transition" onClick={() => like()}><FiHeart className="stroke-red-400 fill-red-400 hover:stroke-red-500 hover:fill-red-500 transition-colors" /></button>
    )
}