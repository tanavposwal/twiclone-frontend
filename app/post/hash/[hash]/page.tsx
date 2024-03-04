import axios from "axios";

export default async function Page({ params }: { params: { hash: string } }) {

  const req = await axios.get(`http://localhost:3001/post/${params.hash}`);
  const data = req.data;

  return (
    <div className="border-b border-slate-700 px-5 mt-4">
      <div className="my-2">
        <button className="text-sm">{'<'} back</button>
      </div>
      <div className="pt-2 font-bold flex gap-3 items-center">
        <img className="w-8 h-8 rounded-full" src="https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg" alt="profile" />
        <p>{data.post.author}</p>
      </div>
      <div className="my-2 text-lg">
      {data.post.content}
      </div>
      <div className="text-sm text-slate-400 py-2">
        {data.post.likes} likes | {data.post.time.substring(0,10)}
      </div>
      <div className="py-3 border-t border-slate-700 flex justify-evenly">
        <button className="hover:text-red-400 transition-colors">like</button>
        <button className="hover:text-green-400 transition-colors">comment</button>
      </div>
    </div>
  );
}