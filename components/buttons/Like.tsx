'use client';
import axios from "axios";
import { FiHeart } from "react-icons/fi";

export default function Like({ hash }: {hash: string}) {
    async function like() {
        const req = await axios.get(`http://localhost:3001/post/${hash}/like`, { headers: {
            "authorization": localStorage.getItem('token')
        }});
        const data = req.data;
        if (data.success) {
            alert(data.msg)
        }
    }

    return (
        <button className="text-red-400 text-xl" onClick={() => like()}><FiHeart /></button>
    )
}