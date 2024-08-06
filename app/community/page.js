import Link from "next/link";
import PostForm from "../_components/PostForm";
import RenderPosts from "../_components/RenderPosts";
import { getUserData } from "../_utils/actions";
import { getPosts } from "../_utils/postActions";

export const revalidate = 100;

export default async function Community() {
  const posts = await getPosts();
  const user = await getUserData();

  return posts.error ? (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="mb-4 text-lg text-red-500">{posts.error}</h1>
        <Link href="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-1/2 min-h-screen p-6 bg-gray-100">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          💹 Crypto & Finance Insights
        </h1>
      </header>

      <div className="max-w-3xl p-6 mx-auto mb-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Share Your Thoughts</h2>
        <PostForm />
      </div>
      {posts.length > 0 && <RenderPosts posts={posts} user={user} />}
    </div>
  );
}
