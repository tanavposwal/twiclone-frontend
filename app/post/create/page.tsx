"use client";

import Back from "@/components/Back";
import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [content, setContent] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    return (
        <div className="px-3 mt-4">
        <div className="my-2">
            <Back />
        </div>
        <div className="pt-2 font-bold flex gap-3 items-center">
            <p>Write a post.</p>
        </div>
        <textarea className="w-full h-48  border border-slate-600 rounded-lg my-3 py-2 px-3 outline-none hover:border-slate-400 transition" value={content} onChange={e => setContent(e.target.value)}></textarea>

        <div className="image flex gap-3 bg-slate-600/30 rounded-lg mb-5 p-2 items-center justify-center">
        <input type="url" placeholder="url to image" className="outline-none px-2 border border-slate-600 rounded-md py-1"  value={image} onChange={e => setImage(e.target.value)} />
        <button className="hover:text-slate-300 transition border border-slate-600 hover:border-slate-400 rounded-md px-2 py-1" onClick={() => setUrl(image)}>add</button>
        <img className="h-12 rounded-md max-w-lg" src={url} />
        </div>
        <button className="px-4 py-2 mb-4 bg-white rounded-full text-black hover:bg-slate-300 border border-slate-400 transition" onClick={async () => {
            try {
                const response = await axios.post("https://twiclone-api-production.up.railway.app/post/create", {content, image}, { headers: {
                    "authorization": localStorage.getItem("token"),
                } });
                
                setContent("")
                setUrl("")
                setImage("")
                alert("Post published")
              } catch (error) {
                alert("Contact developer a bug found.")
                //console.error('Error:', error);
              }
        }}>Publish</button>
    </div>
    )
}