"use client";

import Back from "@/components/Back";
import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [content, setContent] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    return (
        <div className="border-b border-slate-700 px-5 mt-4">
        <div className="my-2">
            <Back />
        </div>
        <div className="pt-2 font-bold flex gap-3 items-center">
            <p>Write a post.</p>
        </div>
        <textarea className="w-full h-48  border-2 border-slate-600 rounded-lg my-3 py-2 px-3 outline-none hover:border-slate-400 transition" value={content} onChange={e => setContent(e.target.value)}></textarea>
        <div className="image flex gap-3 border rounded-lg border-slate-800 mb-5 p-2 items-center justify-center">
        <input type="url" placeholder="url to image" className="outline-none px-2  border rounded-md py-1"  value={image} onChange={e => setImage(e.target.value)} />
        <button className="hover:text-slate-300 transition border rounded-md px-2 py-1" onClick={() => setUrl(image)}>add</button>
        <img className="h-12 rounded-md border border-slate-500 max-w-lg" src={url} />
        </div>
        <button className="px-4 py-2 mb-4 bg-white rounded-full text-black hover:bg-slate-300 transition" onClick={async () => {
            try {
                const response = await axios.post("http://localhost:3001/post/create", {content, image}, { headers: {
                    "authorization": localStorage.getItem("token"),
                } });
                console.log('Response:', response.data);
                // Handle the response data here
              } catch (error) {
                console.error('Error:', error);
                // Handle errors here
              }
        }}>Publish</button>
    </div>
    )
}