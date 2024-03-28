import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import axios from "axios";

export default async function Home() {
  const res = await axios.get(`https://twiclone-api-production.up.railway.app/post/`);
  return (
    <div className="flex flex-col">
      <CreatePost />
      <div className="w-full">
        {res.data.post.map((post: any) => (
          <Post post={post} key={post.hash} />
        ))}
      </div>
    </div>
  );
}
