import Back from "@/components/Back";
import Like from "@/components/buttons/Like";
import axios from "axios";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

export default async function Page({ params }: { params: { hash: string } }) {

  const req = await axios.get(`http://localhost:3001/post/${params.hash}`);
  const data = req.data;

  return (
    <div className="border-b border-slate-700 px-5 mt-4">
      <div className="my-2">
        <Back />
      </div>
      <div className="pt-2 font-bold flex gap-3 items-center">
        <img className="w-8 h-8 rounded-full" src="https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg" alt="profile" />
        <Link href={"/profile/id/"+data.post.author}>{data.post.author}</Link>
      </div>
      <div className="my-2 text-lg">
      {data.post.content}
      </div>
      {data.post.image && <div className="w-full flex items-center justify-center">
        <img src={data.post.image} className="aspect-auto border border-slate-600 rounded-lg max-h-48" alt="" />
      </div>}
      
      <div className="text-sm text-slate-400 py-2">
        {data.post.likes} likes | {data.post.time.substring(0,10)}
      </div>
      <div className="py-3 border-t border-slate-700 flex justify-evenly">
        <Like hash={params.hash} />
        <button className="text-green-400 text-xl"><FiMessageCircle /></button>
      </div>
    </div>
  );
}